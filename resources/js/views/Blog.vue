<template>
    <div id="blog-view">
        <p>Blog</p>
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

import PostComponent from "../components/PostComponent";
export default {
    name : 'Blog',
    components: {PostComponent},
    data() {
        return {
            //posts: null,
        }
    },
    computed:{
        posts() {
            return this.$store.state.posts
        }
    },
    mounted(){
        //get posts data from laravel api
        // axios.get('/api/posts').then((response) => {
        //     this.posts = response.data.posts
        // }).catch(error => console.log(error))
        this.$store.commit('getPosts')
    }
}
</script>
