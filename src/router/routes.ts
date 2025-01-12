import type {RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/pages/login.vue')
    }
]

export {routes};