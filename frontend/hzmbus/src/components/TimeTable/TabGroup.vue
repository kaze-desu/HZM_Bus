<template>
    <var-tabs
        elevation
        item-direction="vertical"
        v-model:active="active"
    >
        <var-tab>
            <var-icon name="map-marker-outline" />
            <div>ZhuHai</div>
        </var-tab>
        <var-tab>
            <var-icon name="map-marker-outline" />
            <div>HongKong</div>
        </var-tab>
        <var-tab>
            <var-icon name="map-marker-outline" />
            <div>Macao</div>
        </var-tab>
    </var-tabs>
    <var-tabs-items v-model:active="active" class="tabs">
    <var-tab-item>
        <List :city="'ZhuHai'"/>
    </var-tab-item>
    <var-tab-item>
        <List :city="'HongKong'"/>
    </var-tab-item>
    <var-tab-item>
        <List :city="'Macao'"/>
    </var-tab-item>
  </var-tabs-items>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import List from './List.vue';

const active = ref(0)
</script>

<style scoped>
.tabs
{
    margin-top: 10px;
}
</style>