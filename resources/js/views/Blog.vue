<template>
    <div id="blog-view">
        <p>Blog</p>
        <ul>
            <v-card v-if="isMasterUser">
                <v-card-actions>
                    <v-btn small @click="editToggle">
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
                                    :item="{
                                    title:  this.$store.getters.newPostTitle,
                                    subtitle:  this.$store.getters.newPostSubtitle,
                                    body:  this.$store.getters.newPostBody,
                                }"
                                    :location="'blog'"
                                    :new-post="true"
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
                               :item-data="item"
                               v-on:deletedItem="deletedItem(index)"
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
            isMasterUser: this.$store.state.loginStatus === 'master',
            isLoggedIn: this.$store.getters.isLoggedIn,
        }
    },
    computed: {
        posts: function () {

            return this.$store.state.posts.filter((post) => {
                return post.tags.filter(value => this.$store.state.allowedTags.includes(value)).length > 0
            })

            return this.$store.state.posts
        },
    },
    mounted() {
        this.$store.commit('getPosts')
    },
    methods: {
        deletedItem(id) {
            this.posts.splice(id, 1)
        },
        editToggle() {
            this.editNewPost = !this.editNewPost
        }
    }
}
</script>
