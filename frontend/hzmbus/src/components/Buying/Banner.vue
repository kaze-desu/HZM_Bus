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
    margin-top: 30px;
    height:140px;
    border-radius: 10px;
}
.swipe-image
{
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}
</style>