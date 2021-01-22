<template>
    <div id="blog-view">
        <p>Blog</p>
        <ul>
            <v-card v-if="isMasterUser">
                <v-card-actions>
                    <v-btn small @click="editNewPost = !editNewPost">
                        <span v-if="!editNewPost">New Post</span>
                        <span v-else>Cancel</span>
                    </v-btn>
                </v-card-actions>
                <v-expand-transition>
                    <div v-if="editNewPost">
                        <v-card
                            class="transition-fast-in-fast-out v-card--showMe"
                            style="height: 100%;">
                            <v-container>
                                <editor
                                    :item="{title: '', subtitle: '', body: ''}"
                                    :location="'blog'"
                                ></editor>
                            </v-container>
                        </v-card>
                    </div>
                </v-expand-transition>
            </v-card>
            <br>
            <PostComponent v-for="(item, index) in posts"
                           :item="item"
                           :index="index"
                           :key="item.id"
                           @deletedItem="deletedItem"
            ></PostComponent>
        </ul>
    </div>
</template>

<script>
import Editor from "../components/Editor"
import PostComponent from "../components/PostComponent";

export default {
    name: 'Blog',
    components: {PostComponent, Editor},
    data() {
        return {
            editNewPost: false,
            isMasterUser: this.$store.state.loginStatus === 'master'
        }
    },
    computed: {
        posts: function () {
            return this.$store.state.posts
        },
        isMasterUser: function () {
            return false;
            return this.$store.getters.authStatus === 'master'
        },
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn
        },
    },
    mounted() {
        this.$store.commit('getPosts')
    },
    methods: {
        deletedItem(id){
            console.log(this.posts)
            this.posts.splice(id, 1)
            this.$forceUpdate();
        }
    }
}
</script>
