<template>
    <v-lazy
        :options="{
          threshold: $store.state.fadeThreshold
        }"
        transition="fade-transition">
        <div :id="'comment-component-' + index">
            <v-card small shaped outlined :style="'border-left: 4px solid ' +  this.rainbow[this.rainbowChoice] + ' !important; ' + 'border-right: 4px solid ' +  this.rainbow[this.rainbowChoice] + ' !important; '">
                <v-card-title small class="pa-2">{{ comment.user.name}} says:
                    <v-card-subtitle v-if="comment.user_this_replys_to" right >
                    <v-icon left >fa-long-arrow-alt-right
                    </v-icon>
                        Replying to {{comment.user_this_replys_to.name}}
                    </v-card-subtitle>
                </v-card-title>
                <v-card-text>{{ comment.body}}</v-card-text>
                <v-card-actions>
                    <v-btn x-small
                        onclick="showReply = !showReply"
                    >
                        <v-icon x-small>fa-pen-nib</v-icon>
                        <span>reply...</span>
                    </v-btn>
                </v-card-actions>
                <comment-box
                    :label="'replying to ' + comment.name"
                    button-text="Send"
                ></comment-box>
            </v-card>
                <v-row v-if="comment.sub_comments && comment.sub_comments.length">
                    <v-col :class="'offset-md-1'">
                        <comment-component
                            v-for="(subcomment, subindex) in comment.sub_comments"
                            :comment="subcomment"
                            :index="index + '.' + subindex"
                            :key="subcomment.id"
                            :name="'sub' + name"
                            :depth="depth + 1"
                        />
                    </v-col>
                </v-row>
        </div>
    </v-lazy>
</template>
<script>
import CommentComponent from "./CommentComponent";
import CommentBox from "./CommentBox";

export default {
     name: "comment-component",
    components: {CommentBox, CommentComponent },
    props: {
        comment: {
            type: Object
        },
        index: {
        },
        name: {
            type: String
        },
        depth: {
            type: Number
        }
    },
    data(){
        return {
            rainbow: [
                '#d23be7',
                '#4355db',
                '#34bbe6',
                '#49da9a',
                '#a3e048',
                '#f7d038',
                '#eb7532',
                '#e6261f',
            ],
            showReply: false,
        }
    },
    computed: {
         rainbowChoice: function() { return this.depth % this.rainbow.length }
    },
    mounted() {
    }
}
</script>
