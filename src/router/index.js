import { createRouter, createWebHistory } from 'vue-router'
import CodeInput from '../components/CodeInput.vue'
import WinPage from '../components/WinPage.vue'
const routes = [
    {
        path: '/',
        name: 'CodeInput',
        component: CodeInput,
    },
    {
        path: '/WinPage',
        name: 'WinPage',
        component: WinPage,
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router

