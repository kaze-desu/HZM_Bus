<template>
    <var-card v-for="card in tripCards" class="card"
    :class="[card]"
    :title="card.title"
    :subtitle="card.subtitle"
    :description="card.description"
    v-model:floating="floating"
    >
    <template #extra>
        <var-space>
            <var-button @click="floating = true">Details</var-button>
            <var-button type="primary" block @click="center = true">Buy</var-button>
        </var-space>
        <var-popup v-model:show="center">
        <div class="popup-buy-block" >
            <BuyPopup :cancel="getCancel" :from="card.title" :target="card.subtitle" />
        </div>
    </var-popup>
    </template>
    <template #floating-content>
        <var-divider dashed/>
        <div>
            {{card.details}}
        </div>
    </template>
    </var-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import BuyPopup from './BuyPopup.vue';
import getTripCard from '@/hooks/getTripCard'

const {getTripCardSimulate} = getTripCard();
const floating = ref(false);
const center = ref(false)
const tripCards = reactive(getTripCardSimulate());
function getCancel(value: boolean)
{
    center.value = value;

}
</script>

<style scoped>
.card
{
    margin-top: 10px;
    max-height: 320px;
}
.popup-buy-block {
    padding: 24px;
    width: 280px;
}
</style>