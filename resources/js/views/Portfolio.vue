<template>
    <div id="portfolio-view">
        <p>Portfolio</p>
            <PortfolioComponent v-for="(item, index) in portfolio"
                                :item="item"
                                :index="index"
                                :key="item.id"
            ></PortfolioComponent>
    </div>
</template>

<script>


import PortfolioComponent from "../components/PortfolioComponent";
export default {
    name : 'Portfolio',
    components: {PortfolioComponent},
    data() {
        return {
            //null
        }
    },
    computed: {
        portfolio() {
            return this.$store.state.portfolio
        }
    },
    mounted() {
        this.$store.commit('getPortfolio')
    }
}
</script>
