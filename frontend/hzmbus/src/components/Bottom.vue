<template>
    <var-app-bar title="HZM BUS" fixed title-position="center" class="top" />
    <router-view/>
    <var-bottom-navigation v-model:active="active" @change="handleChange" class="bottom" fixed>
    <var-bottom-navigation-item name="buy" label="Buying" icon="home"/>
    <var-bottom-navigation-item name="time" label="Time" icon="magnify" />
    <var-bottom-navigation-item name="profile" label="Profile" icon="heart" />
    </var-bottom-navigation>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter,RouterView } from 'vue-router'
const active= ref('')
const router = useRouter()

function handleChange() {
    router.push({ name: active.value })
}
</script>
<style scoped>
.bottom
{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
}
</style>