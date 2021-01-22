<template>
    <v-lazy
        :options="{
          threshold: $store.state.fadeThreshold
        }"
        min-height="175"
        transition="fade-transition">
        <div :id="'post-component-' + index">
            <v-expand-transition mode="out-in">
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
                    </v-card>
                </div>
            </v-expand-transition>
            <div v-if="!isEditing">
                <v-card>
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
                        <!--                         todo: name and icon for this button -->
                        <v-btn v-if="isMasterUser" small @click="isEditing = true">
                            <span>Edit</span>
                            <v-icon>mdi-pencil-outline</v-icon>
                        </v-btn>
                        <v-btn small @click="showMe=!showMe">
                            <span v-if="!showMe">See More</span>
                            <span v-else>See Less</span>
                            <v-icon>mdi-chevron-double-down</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
        <br>
    </v-lazy>
</template>

<script>
import ParagraphComponent from "./ParagraphComponent";
import Editor from "./Editor";
import store from "../store";

export default {
    components: {Editor, ParagraphComponent},
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
        handleDeleted(id){
            this.isEditing = false;
            this.$emit('deletedItem', id)
            console.log(id)
        },
    }
}
</script>
