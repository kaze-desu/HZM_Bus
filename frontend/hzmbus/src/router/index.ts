import { createRouter,createWebHistory } from 'vue-router'

import BuyList from '@/views/BuyList.vue'
import TimeTable from '@/views/TimeTable.vue'
import Profile from '@/views/Profile.vue'
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
        }
    ]
})
export default router