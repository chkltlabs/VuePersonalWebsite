<template>
    <div id="contact-view">
        <p>Contact</p>
        <p>{{info.phone}}</p>
        <p>{{info.email}}</p>
        <p>{{info.resumeLink}}</p>
    </div>
</template>

<script>

export default {
    name : 'Contact',
    props: {},
    computed: {
        info() {
            return this.$store.getters.contactInfo
        }
    },
    mounted(){
        this.$store.commit('getContactInfo');
    }
}
</script>
