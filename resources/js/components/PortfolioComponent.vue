<template>
    <v-lazy
        :options="{
          threshold: $store.state.fadeThreshold
        }"
        min-height="200"
        transition="fade-transition">
        <div :id="'portfolio-component-' + index">
            <li>
                <a :href="item.link">
                    <h1>Title: {{ item.title }}</h1>
                    <span :title="item.date_posted">
            <h5>Posted: {{ item.date_posted_human }}</h5>
            </span>
                    <v-img :src="item.image"></v-img>
                </a>
                <ParagraphComponent
                    v-for="(body, index) in item.description"
                    :body="body"
                    :index="index"
                    :key="index"
                ></ParagraphComponent>
            </li>
        </div>
    </v-lazy>
</template>
<script>

import ParagraphComponent from "./ParagraphComponent";

export default {
    components: {ParagraphComponent},
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
