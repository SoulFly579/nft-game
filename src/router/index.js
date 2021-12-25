import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import _404 from "@/views/404NotFound.vue";
import MarketPlace from "@/views/MarketPlace.vue";
import ContactPage from "@/views/ContactPage.vue";
import LoginPage from "@/views/auth/LoginPage.vue";
import NFTS from "@/views/NFTS.vue";
import store from "../store"

const routes = [
    {
        path: '/',
        name: "Home",
        component: HomePage,
        meta: { isRequireUser: false }
    },
    { 
        path:"/login",
        name:"Login",
        component: LoginPage,
        meta: { isRequireUser: false }
    },
    {
        path: "/explore",
        component: MarketPlace,
        meta: { isRequireUser: true }
    },
    {
        path: "/game",
        component: NFTS,
        meta: { isRequireUser: true }
    },
    {
        path: "/contact",
        component: ContactPage,
        meta: { isRequireUser: false }
    },



    // 404 Page
    { path: "/:pathMatch(.*)*", component: _404 }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(link => link.meta.isRequireUser)) {
        let _isLoggedIn = store.getters._isLoggedIn
        if (_isLoggedIn) {
            next()
        } else {
            next({ path: "/login" })
        }
    } else {
        next()
    }
})

export default router;