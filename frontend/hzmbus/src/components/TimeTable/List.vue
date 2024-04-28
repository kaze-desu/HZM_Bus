<template>
    <var-list
        :finished="finished"
        v-model:loading="loading"
        @load="load(from,target)"
    >
        <var-cell :key="item" v-for="item in list">
        <!--TODO: Filling real data-->
          Time: {{item}}
        </var-cell>
    </var-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GetTime from '@/hooks/GetTime';
defineProps(['from','target']);

const loading = ref(false)
const finished = ref(false)
const list = ref<number[]>([])

//TODO realize the time table computing function and move to a specific TS file
function load(from:string,target:string)
{
  setTimeout(() => {

    let timeTable = GetTime().getTime(from, target, new Date().getHours(), new Date().getMinutes());
    timeTable.forEach(element => {
      list.value.push(element);
    });
    loading.value = false

    if (list.value.length >= 60) {
      finished.value = true
    }
  }, 1000)
}
</script>

<style scoped>
</style>