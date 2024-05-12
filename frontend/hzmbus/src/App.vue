<script setup lang="ts">
import { StyleProvider, Themes } from '@varlet/ui';
import Bottom from '@/components/Bottom.vue';
import '@varlet/touch-emulator'

let rootStyleVars = null

Themes.md3Light['--color-primary'] = "#4D5C92";
Themes.md3Light['--color-primary-container'] = "#DCE1FF";
Themes.md3Light['--color-surface-container-high'] = "#E9E7EF";



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

    <Bottom/>
</template>

<style>
body {
  transition: background-color .25s, color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
  
}
</style>
