<template>
    <var-swipe class="swipe" autoplay="2000">
    <var-swipe-item class="swipe-image">
    <var-image
    fit="cover"
    src="https://i.hzmbus.com/webhtml/static/img/bg.3f37990.png"
    />
    </var-swipe-item>
    </var-swipe>
</template>
<script setup lang="ts">

</script>
<style scoped>
.swipe
{
    height:200px;
    border-radius: 10px;
}
.swipe-image
{
    width: auto;
    height: auto;
    object-fit: cover;
}
</style>