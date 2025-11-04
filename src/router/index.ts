// npm install vue-router
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import DataDetail from "../components/DataDetail.vue";

const routes = [
    { path: '/home', component: Home },
    { path: '/test', component: Test },
    { path: '/test/:testId', component: DataDetail }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router