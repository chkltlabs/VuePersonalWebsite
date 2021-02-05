<template>
    <v-expand-transition mode="out-in">
        <div :id="'comment-section-' + postIndex" v-if="showComments">
            <v-btn x-small><span>Add Comment</span><v-icon right>fa-comment-dots</v-icon></v-btn>
            <v-container v-if="isEditing && this.$store.state.getters.isLoggedIn()">

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
export default {
    components: { CommentComponent },
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
