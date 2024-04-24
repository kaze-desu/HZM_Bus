<template>

</template>

<script setup lang="ts">
import { onMounted,onUnmounted} from 'vue';

onMounted(() => {
    console.log('TimeTable mounted');
});
onUnmounted(() => {
    console.log('TimeTable unmounted');
});
</script>

<style scoped>
</style>