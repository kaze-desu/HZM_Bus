<template>
    <var-list
        :finished="finished"
        v-model:loading="loading"
        @load="load"
    >
        <var-cell :key="item" v-for="item in list">
        <!--TODO: Filling real data-->
        列表项: {{ item }}city: {{ city }}
        </var-cell>
    </var-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps(['city']);

const loading = ref(false)
const finished = ref(false)
const list = ref<number[]>([])
//TODO realize the time table computing function and move to a specific TS file
function load() {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      list.value.push(list.value.length + 1)
    }

    loading.value = false

    if (list.value.length >= 60) {
      finished.value = true
    }
  }, 1000)
}
</script>

<style scoped>
</style>