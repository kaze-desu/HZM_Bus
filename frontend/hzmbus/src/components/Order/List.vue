<template>
    <var-paper :elevation="2" :width="100" :height="100" />
    <var-paper :elevation="2" :width="100" :height="100" />
    <var-paper :elevation="2" :width="100" :height="100" />
    <var-paper :elevation="2" :width="100" :height="100" />
</template>

<script setup lang="ts">
import getTicket from '@/hooks/getTicket';
import { reactive, ref } from 'vue'
import { useSessionStore } from '@/store/session';
import type TicketType from '@/types/BuyInfoType';
const floating = ref(false);
const center = ref(false)

defineProps(['type']);

const loading = ref(false)
const finished = ref(false)
const session = useSessionStore()
const ticket = reactive<TicketType[]>([])

function load(type:string)
{
    setTimeout(() => {
        const raw = getTicket().getTicketSimulate(session.username,type);
        finished.value = true;
    }, 1000)
}
</script>

<style scoped>
</style>