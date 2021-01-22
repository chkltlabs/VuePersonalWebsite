<template>
    <v-lazy
        :options="{
          threshold: $store.state.fadeThreshold
        }"
        min-height="200"
        transition="fade-transition">
        <div :id="'post-component-' + index">
            <li>
                <div v-if="isEditing">
                    <editor
                        :item="item"
                        :location="'blog'"
                    ></editor>
                </div>
                <div v-else>
                    <div v-if="isMasterUser">
                        <!--                         todo: name and icon for this button -->
                        <v-btn small @click="function (){isEditing = true}"></v-btn>
                    </div>
                    <h1>Title: {{ item.title }}</h1>
                    <h3>Subtitle: {{ item.subtitle }}</h3>
                    <div v-html="item.body"/>
                </div>
            </li>
            <br>
        </div>
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
            isEditing: false,
            isMasterUser: this.$store.state.loginStatus === 'master',
        }
    },
    methods: {}
}
</script>
