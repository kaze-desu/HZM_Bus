<template>
    <var-style-provider :style-vars="styleVars">
        <var-row :gutter="[10, 10]" justify="center">
            <var-col direction="column">
                <Cover/>
            </var-col>
            <var-col direction="column">
                <var-paper :elevation="2"  :height="100" ripple class="paper" @click="toOrder('Ticket')">
                    <div class="container">
                        <var-icon name="checkbox-marked-circle" :size="17" class="icon"/>
                        <span style="font-size: large;font-weight: bold;">Check In</span>
                    </div>
                </var-paper>
            </var-col>
            <var-col direction="column">
                <var-paper :elevation="2" :height="100" ripple class="paper" @click="toOrder('Order')">
                    <div class="container">
                        <var-icon name="checkbox-marked-circle" :size="17" class="icon" />
                        <span style="font-size: large;font-weight: bold;">All Order</span>
                    </div>
                </var-paper>
            </var-col>
        </var-row>
    </var-style-provider>
</template>

<script setup lang="ts">
import Cover from '@/components/Profile/Cover.vue'
const styleVars ={'--paper-background': '#DEE1F9',}

import { useRouter } from 'vue-router'
const router = useRouter()

function toOrder(typeOfOrder: string)
{
    router.push({
        name: 'order', params:{
        type: typeOfOrder
    }})
}

</script>

<style scoped>
.paper
{
    text-align: center;
}
.container
{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.icon
{
    margin-right: 10px;
}
</style>