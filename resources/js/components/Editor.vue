<template>
    <v-form ref="form" dark>
        <v-text-field v-model="title" label="title" required></v-text-field>
        <v-text-field v-model="subtitle" label="subtitle" required ></v-text-field>
        <vue-editor v-model="content"></vue-editor>
<!--        <vue-editor v-model="content"></vue-editor>-->
        <v-btn @click="saveContent">Save</v-btn>
        <div v-html="content"></div>
    </v-form>
</template>
<script>
import { VueEditor, Quill } from "vue2-editor";
//https://github.com/davidroyer/vue2-editor for docs and usage
Quill.register(Quill.import('attributors/style/align'), true)
Quill.register(Quill.import('attributors/style/background'), true)
Quill.register(Quill.import('attributors/style/color'), true)
Quill.register(Quill.import('attributors/style/direction'), true)
Quill.register(Quill.import('attributors/style/font'), true)
Quill.register(Quill.import('attributors/style/size'), true)
export default {
    components: {
        VueEditor
    },
    props: {
        item: Object,
    },
    data() {
        return {
            content: this.item.body,
            title: this.item.title,
            subtitle: this.item.subtitle,
        }
    },
    methods: {
        saveContent: function() {
            console.log(this.content);
        }
    }
}
</script>
