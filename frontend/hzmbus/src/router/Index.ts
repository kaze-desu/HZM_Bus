import { createRouter,createWebHistory } from 'vue-router'

import BuyList from '@/views/BuyList.vue'
import TimeTable from '@/views/TimeTable.vue'
import Profile from '@/views/Profile.vue'
import Login from '@/views/Login.vue'
import Order from '@/views/Order.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'buy',
            component: BuyList
        },
        {
            path: '/time',
            name: 'time',
            component: TimeTable
        },
        {
            path:'/profile',
            name:'profile',
            component: Profile
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/order/:type',
            name:'order',
            component:Order
        }
    ]
})
export default router
