import { ref, computed } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'

import BuyList from '@/views/BuyList.vue'
import TimeTable from '@/views/TimeTable.vue'

export default function()
{
    const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'BuyList',
                component: BuyList
            },
            {
                path: '/time',
                name: 'TimeTable',
                component: TimeTable
            }
        ]
    })
}