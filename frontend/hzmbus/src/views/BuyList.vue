<template>
    <var-app-bar title="HZM BUS" fixed title-position="center" />
    <var-row :gutter="[10, 10]" justify="center" >
    <var-col :span="15" direction="column">
        <Banner/>
    </var-col>
    <var-col :span="15" direction="column">
        <TripList/>
    </var-col>
    </var-row>
    <Bottom/>
</template>

<script setup lang="ts">
import TripList from '@/components/BuyList/TripList.vue'
import Bottom from '@/components/Bottom.vue';
import Banner from '@/components/BuyList/Banner.vue';



</script>

<style scoped>
</style>