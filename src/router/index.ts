// npm install vue-router
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";

const routes = [
    { path: '/home', component: Home },
    { path: '/test', component: Test }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router