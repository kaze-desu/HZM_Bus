<template>
    <span class="description">Date</span>
    <var-input variant="outlined"readonly v-model="dateValue" @click="datePick" class="readonly_input" />
    <!-- Overlay Part
    Default is not shown, when clicked on the input, it will be shown.
    Please do not change the structure of the overlay part if you are not sure about it.
    -->
    <var-overlay v-model:show="datePickShow">
        <div class="overlay-content" @click.stop>
            <var-date-picker
                v-model="dateValue"
                :allowed-dates="allowedDates"
            >
            <template #actions>
                <var-space size="small">
                    <var-button type="primary" text @click="datePickShow=false">Confirm</var-button>
                </var-space>
            </template>
        </var-date-picker>
        </div>
    </var-overlay>
    <!-- Overlay Part End -->
    <span class="description">Time</span>
    <var-input variant="outlined" readonly v-model="timeValue" @click="timePick" class="readonly_input" />
    <!-- Overlay Part
    Default is not shown, when clicked on the input, it will be shown.
    Please do not change the structure of the overlay part if you are not sure about it.
    -->
    <var-overlay v-model:show="timePickShow">
        <div class="overlay-content" @click.stop>
            <var-time-picker
            v-model="timeValue"
            format="24hr"
            use-seconds
            :allowed-time="allowedTime"
            />
        </div>
    </var-overlay>
    <!-- Overlay Part End -->
    <var-space :size="[10, 10]" justify="flex-end">
        <var-button text type="primary" @click="cancel(false)">Cancel</var-button>
        <var-button text type="primary" @click="sendBuyInfo(from,target,dateValue,timeValue,0)">Buy</var-button>
    </var-space>
</template>
<script setup lang="ts">
//TODO Get the data from TripList.vue then use the feature to search in database or pinia, finally display it in the popup.
import { ref } from 'vue';
import { useBuyInfoStore } from '@/store/buyInfo';
import useBuyInfo from '@/hooks/useBuyInfo';

defineProps(['cancel', 'from','target']);

const dateValue = ref('');
const currentDate = new Date().getDate();
const datePickShow = ref(false);
const timePickShow = ref(false);
const timeValue = ref('')
const { sendBuyInfo } = useBuyInfo();
const allowedDates = (val: string) =>
{
    const date = new Date(val);
    return date.getDate() !== 0 && date.getDate()>=currentDate && date.getDate()<=currentDate+7;
}

const allowedTime =
{
    hours: (hour:number) => hour % 2 === 0,
    minutes: (minute:number) => minute % 15 !== 0,
    seconds: (second:number) => second % 2 !== 0,
}

function datePick()
{
    datePickShow.value = true;
}


function timePick()
{
    timePickShow.value = true;
    console.log(timeValue.value);
}

const buyInfoStore = useBuyInfoStore();

</script>

<style scoped>
.readonly_input
{
    margin-top: 10px;
    margin-bottom: 10px;
}
.description
{
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    color: #616161;
}

</style>