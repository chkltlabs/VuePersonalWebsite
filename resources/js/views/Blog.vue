<template>
    <div id="blog-view">
        <p>Blog</p>
        <div v-if="isMasterUser">
            <editor></editor>
        </div>
        <ul>
            <PostComponent v-for="(item, index) in posts"
                           :item="item"
                           :index="index"
                           :key="item.id"
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
    }
}
</script>
