<template>
    <var-app-bar title="HZM BUS" fixed title-position="center" />

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