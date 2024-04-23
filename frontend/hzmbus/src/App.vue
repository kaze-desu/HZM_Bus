<script setup lang="ts">
import { StyleProvider, Themes } from '@varlet/ui';
import BuyList from '@/views/BuyList.vue';
const viewportTheme = Themes.toViewport(Themes.md3Light,{
    // 默认值为 375
  viewportWidth: 750,
  // 默认值为 'vmin'
  viewportUnit: 'vmin',
  // 默认值为 6
  unitPrecision: 6,
})
StyleProvider(viewportTheme)
</script>

<template>
    <BuyList/>
</template>

<style scoped>

</style>
