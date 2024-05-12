<template>
    <var-list
        :finished="finished"
        v-model:loading="loading"
        @load="load(from,target)"
    >
        <var-cell :key="item" v-for="item in list">
        <var-card
    :title="'Next Bus'"
    :description="'Est:~'+item+' minus | From '+from+' to '+target" />
        </var-cell>
    </var-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Time from '@/hooks/getTime';
defineProps(['from','target']);

const loading = ref(false)
const finished = ref(false)
const list = ref<string[]>([])
const {getTime} = Time();
function load(from:string,target:string)
{
  setTimeout(() => {

    let timeTable = getTime(from, target, new Date().getHours(), new Date().getMinutes());
    timeTable.forEach(element => {
      if(element<=1)
      {
        list.value.push('Arriving');
      }
      list.value.push(''+element);
    });
    loading.value = false

    if (list.value.length >= 10) {
      finished.value = true
    }
  }, 1000)
}
</script>

<style scoped>
</style>