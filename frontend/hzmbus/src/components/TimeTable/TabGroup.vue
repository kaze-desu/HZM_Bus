<template>
    <var-tabs
        elevation
        item-direction="vertical"
        v-model:active="active"
    >
        <var-tab>
            <var-icon name="map-marker-outline" />
            <div>HongKong To Macao</div>
        </var-tab>
        <var-tab>
            <var-icon name="map-marker-outline" />
            <div>Macao To HongKong</div>
        </var-tab>
        <var-tab>
            <var-icon name="map-marker-outline" />
            <div>HongKong To ZhuHai</div>
        </var-tab>
        <var-tab>
            <var-icon name="map-marker-outline" />
            <div>ZhuHai To HongKong</div>
        </var-tab>
    </var-tabs>
    <var-tabs-items v-model:active="active" class="tabs">
        <var-tab-item>
            <List :from="'HongKong'" :target="'Macao'"/>
        </var-tab-item>
        <var-tab-item>
            <List :from="'Macao'" :target="'HongKong'"/>
        </var-tab-item>
        <var-tab-item>
            <List :from="'HongKong'" :target="'ZhuHai'"/>
        </var-tab-item>
        <var-tab-item>
            <List :from="'ZhuHai'" :target="'HongKong'"/>
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