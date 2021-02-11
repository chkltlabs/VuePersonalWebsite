<template>
    <v-row>
        <v-col class="col-8 col-md-10">
            <v-text-field
                :label="label"
                :placeholder="placeholder"
            ></v-text-field>
        </v-col>
        <v-col class="col-4 col-md-2">
            <v-btn x-small><span>{{ buttonText }}</span><v-icon right>fa-comment-dots</v-icon></v-btn>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: {
        buttonText: {
            type: String,
        },
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        userID: {
            type: Number,
        },
        createUrl: {
            type: String,
        }
    }
}
</script>
