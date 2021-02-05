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
                <v-card-actions>
                    <v-btn small @click="showComments = !showComments">
                        <span v-if="!showComments">Show Comments</span>
                        <span v-else>Hide Comments</span>
                        <v-icon right>{{ !showComments ? 'fa-dumpster' : 'fa-dumpster-fire' }}</v-icon>
                    </v-btn>
                </v-card-actions>
                <CommentSection
                    :comments="item.comments"
                    :show-comments="showComments"
                    :post-index="index"
                ></CommentSection>
            </v-card>
            <br>
        </div>
    </v-lazy>
</template>
<script>

import ParagraphComponent from "./ParagraphComponent";
import CommentSection from "./CommentSection";

export default {
    components: {CommentSection, ParagraphComponent},
    props: {
        item: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    data() {
        return {
            showComments: false,
        }
    },
    mounted() {
    }
}

</script>
