<template>
    <v-expand-transition mode="out-in">
        <div :id="'comment-section-' + postIndex" v-if="showComments">
            <v-container v-if=" this.$store.getters.isLoggedIn">
            <comment-box
            label="fuk"
            placeholder="ur fase"
            button-text="kiss me"
            ></comment-box>
            </v-container>
            <v-container>
                <CommentComponent
                    v-for="(comment, index) in comments"
                    :comment="comment"
                    :index="index"
                    :key="comment.id"
                    name="comment-component"
                    :depth="0"
                />
            </v-container>
        </div>
    </v-expand-transition>
</template>
<script>
import CommentComponent from "./CommentComponent";
import CommentBox from "./CommentBox";
export default {
    components: { CommentBox, CommentComponent },
    props: {
        showComments: {
            type: Boolean,
        },
        comments: {
            type: Array,
        },
        postIndex: {
            type: Number,
        }
    },
    data() {
        return {
            isEditing: false,
        }
    }
}
</script>
