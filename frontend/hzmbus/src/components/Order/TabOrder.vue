<template>
    <var-tabs
        elevation
        item-direction="vertical"
        v-model:active="active"
    >
        <var-tab name="Ticket">
            <var-icon name="map-marker-outline" />
            <div>Ticket</div>
        </var-tab>
        <var-tab name="Order">
            <var-icon name="map-marker-outline" />
            <div>All Order</div>
        </var-tab>
    </var-tabs>
    <var-tabs-items v-model:active="active">
    <var-tab-item name="Ticket">
        <list type="Ticket" />
    </var-tab-item>
    <var-tab-item name="Order">
        <list type="Order" />
    </var-tab-item>
</var-tabs-items>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref} from 'vue'
import { useRoute,useRouter } from 'vue-router'
import {useSessionStore} from '@/store/Session'
import { Snackbar } from '@varlet/ui';
import List from './List.vue';
defineProps(['type'])
const active = ref('')
const route = useRoute()
const router = useRouter()
onMounted(() => {
    const session = useSessionStore()
    if(session.status)
    {
        active.value = route.params.type.toString()
    }
    else
    {
        Snackbar["error"]("Please log in before check the tickets.");
        router.push({ name: 'login' });
    }
})
onUnmounted(() => {
    active.value = ''
})
</script>

<style scoped>
.tabs
{
    margin-top: 10px;
}

</style>