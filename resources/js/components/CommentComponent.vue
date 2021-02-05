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

                </v-card-actions>
            </v-card>
                <v-row v-if="comment.sub_comments && comment.sub_comments.length">
                    <v-col :class="'offset-md-' + (depth)">
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

export default {
     name: "comment-component",
    components: { CommentComponent },
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
        }
    },
    computed: {
         rainbowChoice: function() { return this.depth % this.rainbow.length }
    },
    mounted() {
    }
}
</script>
