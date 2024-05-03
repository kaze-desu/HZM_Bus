<template>
    <var-row :gutter="[10, 10]" justify="center" >
    <var-col :span="15" direction="column">
        <Banner/>
    </var-col>
    <var-col :span="15" direction="column">
        <TripList/>
    </var-col>
    </var-row>
</template>

<script setup lang="ts">
import TripList from '@/components/BuyList/TripList.vue';
import Banner from '@/components/BuyList/Banner.vue';
</script>

<style scoped>
</style>