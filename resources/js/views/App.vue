<template>
    <v-app>
        <v-bottom-navigation app :value="activeBtn" color="primary">
            <v-row
                class="text-center">
                <v-col
                    cols="12"
                >
                    <v-btn
                        flat
                        class="float-left"
                        dusk="home-link"
                        :to="{ name: 'home'}">
                        <h3>Erik V Gratz</h3>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <div
                        class="float-none"
                    >
                        <v-btn
                            flat
                            dusk="about-link"
                            :to="{ name: 'about'}">
                            About
                        </v-btn>
                        <v-btn
                            flat
                            dusk="portfolio-link"
                            :to="{ name: 'portfolio'}">
                            Portfolio
                        </v-btn>
                        <v-btn
                            flat
                            dusk="blog-link"
                            :to="{ name: 'blog'}">
                            Blog
                        </v-btn>
                        <v-btn
                            flat
                            dusk="contact-link"
                            :to="{ name: 'contact'}">
                            Contact
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-bottom-navigation>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {}
</script>
