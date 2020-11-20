<template>
    <div :id="'post-paragraph-component-' + index">
        <p>{{body}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            body:{
                type: String,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            }
        }
    }
</script>
