<template>
<vue-qrcode style="width: 300px; height: 300px;"
    type="image/png"
    value="{{ token }}"
    :color="{ dark: '#000000ff', light: '#ffffffff' }"
  />
</template>

<script setup lang="ts">
import VueQrcode from 'vue-qrcode';
</script>

<style scoped>
</style>