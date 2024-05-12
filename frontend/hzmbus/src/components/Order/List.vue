<template>
    <var-style-provider :style-vars="styleVars">
    <var-cell>
        <var-card v-for="ticket in getTicket(session.username,type)" class="card"
        :class="[ticket]"
        :title="'FROM: '+ ticket.from + ' To: ' + ticket.target"
        :description="'Please check in before: ' + ticket.date + ' ' + ticket.time"
        v-model:floating="floating"
        >
        <template #extra>
            <var-space>
                <var-button type="primary" block v-if="type=='Ticket'" @click="show = true">Check In</var-button>
            </var-space>
            <var-overlay v-model:show="show" teleport="body">
                    <var-paper :elevation="2" :width="300" :height="300">
                        <QRcode ::token="ticket.token"/>
                    </var-paper>
            </var-overlay>
        </template>
        </var-card>
    </var-cell>
</var-style-provider>
</template>

<script setup lang="ts">
import Ticket from '@/hooks/getTicket';
import {  ref } from 'vue'
import { useSessionStore } from '@/store/session';
import QRcode from './QRcode.vue';
const floating = ref(false);
const show = ref(false)
defineProps(['type']);

const {getTicket} = Ticket();
const session = useSessionStore();
const styleVars = ref()

styleVars.value = {
    '--card-title-margin' : '15px',
    '--card-subtitle-margin' : '0px',
    '--card-description-margin' : '0px 0px 0px 0px',
    '--card-footer-margin' : '0px',
    '--card-line-height' : '20px',
}

</script>

<style scoped>
.card
{
    margin-top: 10px;
    max-height: 320px;
}

</style>