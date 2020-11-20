import Vue from 'vue'
import Vuetify, {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VNavigationDrawer,
    VToolbar,
    VContainer,
    VMain
} from "vuetify/lib";

Vue.use(Vuetify, {
    components: { VApp, VAppBar, VAppBarNavIcon, VNavigationDrawer, VToolbar, VContainer, VMain}
})

const opts = {
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#572785',
                secondary: '#000',
                accent: '#F2E230',
                error: '#FC0000',
            },
        },
    },
}

export default new Vuetify(opts)
