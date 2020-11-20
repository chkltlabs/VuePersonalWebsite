<template>
    <div :id="'post-component-' + index">
        <li>
            <h1>Title: {{ item.title }}</h1>
            <h3>Subtitle: {{ item.subtitle }}</h3>
            <PostParagraphComponent
                v-for="(body, index) in item.body"
                :body="body"
                :index="index"
                :key="index"
            ></PostParagraphComponent>
        </li>
        <br>
    </div>
</template>

<script>
import PostParagraphComponent from "./PostParagraphComponent";

export default {
    components: {PostParagraphComponent},
    props: {
        item: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    mounted() {
    }
}
</script>
