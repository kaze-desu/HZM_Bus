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
                <BuyPopup :cancel="getCancel"/>
                //TODO: make a buy popup page, transfer the data to the popup page
            </div>
        </var-popup>
        </template>
        <template #floating-content>
            <var-divider dashed/>
            <div class="card-example-text">
                {{card.details}}
            </div>
        </template>
        </var-card>
</template>

<script setup lang="ts">
import type { TripCardType } from '@/types/TripType';
import { reactive, ref } from 'vue';
import BuyPopup from './BuyPopup.vue';
const floating = ref(false);
const center = ref(false)
//TODO Get the data from database or pinia
const tripCard:TripCardType = reactive({
    title: 'FROM',
    subtitle: 'TO',
    description: 'Description of the content',
    details: 'Further details about the content'
});
const tripCards:TripCardType[] = reactive([]);
tripCards.push(tripCard);
tripCards.push(tripCard);

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