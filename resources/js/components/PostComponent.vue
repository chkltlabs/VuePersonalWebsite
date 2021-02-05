<template>
    <v-lazy
        :options="{
          threshold: $store.state.fadeThreshold
        }"
        min-height="175"
        transition="fade-transition">
        <div :id="'post-component-' + index">
            <v-expand-transition mode="in-out">
                <div v-if="isEditing">
                    <v-card
                        class="transition-fast-in-fast-out v-card--showMe"
                        style="height: 100%;"
                    >
                        <v-container>
                            <editor
                                class="transition-fast-in-fast-out v-card--showMe"
                                :item="item"
                                :location="'blog'"
                                @newItem="newItem"
                                @deletedItem="handleDeleted"
                            ></editor>
                        </v-container>
                        <v-card-actions>
                            <v-btn small @click="isEditing = false">
                                <span>Cancel</span>
                                <v-icon right>fa-times</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-expand-transition>
            <br>
            <v-expand-transition mode="in-out">
                <div v-if="!isEditing">
                    <v-card shaped outlined >
                        <v-card-title>{{ item.title }}</v-card-title>
                        <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                        <v-expand-transition mode="out-in">
                            <div
                                v-if="showMe">
                                <v-card
                                    class="transition-fast-in-fast-out v-card--showMe"
                                    style="height: 100%;"
                                >
                                    <v-container>
                                        <v-card-text v-html="item.body"/>
                                    </v-container>
                                </v-card>
                            </div>
                        </v-expand-transition>
                        <v-card-actions>
                            <v-btn v-if="isMasterUser" small @click="isEditing = true">
                                <span>Edit</span>
                                <v-icon right>fa-pen-alt</v-icon>
                            </v-btn>
                            <v-btn small @click="showMe=!showMe">
                                <span v-if="!showMe">See More</span>
                                <span v-else>See Less</span>
                                <v-icon v-if="!showMe" right>fa-chevron-circle-down</v-icon>
                                <v-icon v-else right>fa-chevron-circle-up</v-icon>
                            </v-btn>
                            <v-btn small v-if="showMe" @click="showComments = !showComments">
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
                </div>
            </v-expand-transition>
            <br>
        </div>
    </v-lazy>
</template>

<script>
import ParagraphComponent from "./ParagraphComponent";
import Editor from "./Editor";
import store from "../store";
import CommentComponent from "./CommentComponent";
import CommentSection from "./CommentSection";

export default {
    components: {CommentSection, CommentComponent, Editor, ParagraphComponent},
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
            showMe: false,
            isEditing: false,
            isMasterUser: this.$store.state.loginStatus === 'master',
        }
    },
    methods: {
        newItem(newValue) {
            this.item = newValue
            this.isEditing = false;
            this.showMe = true;
        },
        handleDeleted(id) {
            this.isEditing = false;
            this.$emit('deletedItem', id)
            console.log(id)
        },
    },
    mounted() {
        console.log(this.item);
    }
}
</script>
