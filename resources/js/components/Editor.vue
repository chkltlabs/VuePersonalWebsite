<template>
    <v-form ref="form" dark>
        <v-text-field v-model="title" label="title" required></v-text-field>
        <v-text-field v-model="subtitle" label="subtitle" required></v-text-field>
        <vue-editor
            id="editor"
            v-model="body"
            :editorOptions="quillModules"
            useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
        <v-row>
            <v-container>
                <v-btn @click="saveContent">Save</v-btn>
                <v-btn v-if="this.item.id" @click="performDelete">Delete</v-btn>
            </v-container>
            <v-container>
                <v-combobox
                    v-model="tags"
                    :items="allTags"
                    label="tags"
                    multiple
                    outlined
                    dense
                >
                </v-combobox>
            </v-container>
        </v-row>
        <v-container>
            <div v-html="body"></div>
        </v-container>
    </v-form>
</template>
<script>
import {VueEditor, Quill} from "vue2-editor";
import {IndentStyle} from "../plugins/indentStyler";
import ImageResize from "quill-image-resize-vue";
import {ImageDrop} from 'quill-image-drop-module';
//const ImageResize = require('quill-image-resize-module').default
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);
//import ImageUploader from "quill-image-uploader";
//https://github.com/davidroyer/vue2-editor for docs and usage
Quill.register(IndentStyle, true)
//Quill.register('modules/imageUploader', ImageUploader);
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
        location: String,
        newPost: Boolean,
    },
    data() {
        return {
            body: this.item.body,
            title: this.item.title,
            subtitle: this.item.subtitle,
            tags: this.item.tags,
            quillModules: {
                modules: {
                    imageDrop: true,
                    imageResize: {}
                },
            }
        }
    },
    computed: {
        allTags: function () {
            return this.$store.state.allTags
        }
    },
    mounted: function() {
        if(this.$store.state.allTags.length === 0){
            this.$store.commit('getAllTags')
        }
    },
    destroyed: function () {
        if (this.newPost === true) {
            this.$store.commit('setNewPostItem',
                {
                    title: this.title,
                    subtitle: this.subtitle,
                    body: this.body,
                    tags: this.tags,
                }
            )
        }
    },
    methods: {
        performDelete: function () {
            console.log(this.item.id);
            var id = this.item.id;

            axios({
                url: `/api/post/${id}/delete`,
                method: "DELETE",
            })
                .then(result => {
                    console.log(result)
                    this.$emit('deletedItem', id)
                })
                .catch(err => {
                    console.log(err);
                });
        },
        saveContent: function () {

            var formData = new FormData();
            formData.append('title', this.title);
            formData.append('subtitle', this.subtitle);
            formData.append('body', this.body)
            formData.append('id', this.item.id)
            formData.append('tags', JSON.stringify(this.tags))
            console.log(this.tags)
            formData.append('item', this.item)
            console.log(formData)

            axios({
                url: `/api/post/${this.item.id}/update`,
                method: "POST",
                data: formData
            })
                .then(result => {
                    console.log(result)
                    this.$emit('newItem', result.data.item)
                })
                .catch(err => {
                    console.log(err);
                });
        },
        handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
            // An example of using FormData
            // NOTE: Your key could be different such as:
            // formData.append('file', file)
            //todo, change this silliness to a hashed 'name'
            var addName = prompt("Name that image for me, homeslice", 'Padunkle')
            var formData = new FormData();
            formData.append("image", file);
            var today = new Date();
            formData.append('name', addName + today.toISOString())
            formData.append('location', this.location)

            axios({
                url: `/api/images/new`,
                method: "POST",
                data: formData
            })
                .then(result => {
                    let url = result.data; // Get url from response
                    console.log(result)
                    Editor.insertEmbed(cursorLocation, "image", "" + url);
                    resetUploader();
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
}
</script>
