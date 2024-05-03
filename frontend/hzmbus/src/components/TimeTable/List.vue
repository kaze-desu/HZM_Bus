<template>
    <var-list
        :finished="finished"
        v-model:loading="loading"
        @load="load(from,target)"
    >
        <var-cell :key="item" v-for="item in list">
        <!--TODO: Filling real data-->
        <var-card
    :title="'Next Bus'"
    :description="'Est:~'+item+' minus | From '+from+' to '+target" />
        </var-cell>
    </var-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GetTime from '@/hooks/GetTime';
defineProps(['from','target']);

const loading = ref(false)
const finished = ref(false)
const list = ref<string[]>([])

//TODO realize the time table computing function and move to a specific TS file
function load(from:string,target:string)
{
  setTimeout(() => {

    let timeTable = GetTime().getTime(from, target, new Date().getHours(), new Date().getMinutes());
    timeTable.forEach(element => {
      if(element<=1)
      {
        list.value.push('Arriving');
      }
      list.value.push(''+element);
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