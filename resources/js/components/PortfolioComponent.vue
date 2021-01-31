<template>
    <v-lazy
        :options="{
          threshold: $store.state.fadeThreshold
        }"
        min-height="200"
        transition="fade-transition">
        <div :id="'portfolio-component-' + index">
            <v-card>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>Title: {{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>Posted: {{ item.date_posted_human }}</v-list-item-subtitle>
                        <v-list-item
                            style="color: white"
                            v-for="(body, index) in item.description"
                            :key="index"
                        >{{ body }}
                        </v-list-item>
                    </v-list-item-content>
                    <v-list-item-avatar tile size="200" color="grey">
                        <v-img :src="item.image" rounded="50"></v-img>
                    </v-list-item-avatar>
                </v-list-item>
            </v-card>
            <br>
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
        console.log(this.item)
    }
}

</script>
