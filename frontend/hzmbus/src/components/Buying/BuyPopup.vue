<template>
    <var-input variant="outlined" placeholder="Time" readonly v-model="dateValue" @click="timePick" />
    <var-overlay v-model:show="timePickShow">
        <div class="overlay-content" @click.stop>
        <var-date-picker
            v-model="dateValue"
            min="2020-10-15"
            max="2021-01-15"
            :allowed-dates="allowedDates"
        />
        </div>
    </var-overlay>
    <var-space :size="[10, 10]" justify="flex-end">
        <var-button text type="primary" @click="cancel(false)">Cancel</var-button>
        <var-button text type="primary">Buy</var-button>
    </var-space>
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue';
//TODO Get the data from TripList.vue then use the feature to search in database or pinia, finally display it in the popup.
defineProps(['cancel']);
const dateValue = ref('')
const allowedDates = (val: string) => parseInt(val.split('-')[2], 10) % 2 === 1;
const timePickShow = ref(false);
function timePick()
{
    timePickShow.value = true;
}
</script>

<style scoped>
</style>