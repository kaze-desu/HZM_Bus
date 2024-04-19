<template>
    <var-bottom-navigation v-model:active="active" @change="handleChange" class="bottom" fixed>
    <var-bottom-navigation-item label="标签" icon="home" />
    <var-bottom-navigation-item label="标签" icon="magnify" />
    <var-bottom-navigation-item label="标签" icon="heart" />
    <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'
const active = ref(0)

function handleChange()
{
    Snackbar.info(`changed to ${active}`)
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