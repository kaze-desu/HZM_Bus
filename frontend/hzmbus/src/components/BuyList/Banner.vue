<template>
    <var-swipe class="swipe" autoplay="2000">
    <var-swipe-item class="swipe-image">
    <var-image
    fit="cover"
    src="https://www.xiaohuo.icu/wp-content/uploads/2024/05/cube_2019-11-19-05-45-15749.jpeg"
    position="center"
    />
    </var-swipe-item>
    <var-swipe-item class="swipe-image">
    <var-image
    fit="cover"
    src="https://www.xiaohuo.icu/wp-content/uploads/2024/05/1200px-HZMB_Qinzhou_Birdge_20190517.jpg"
    position="center"
    />
    </var-swipe-item>
    <var-swipe-item class="swipe-image">
    <var-image
    fit="cover"
    src="https://www.xiaohuo.icu/wp-content/uploads/2024/05/chinabridge.jpg"
    position="center"
    />
    </var-swipe-item>
    <var-swipe-item class="swipe-image">
    <var-image
    fit="cover"
    src="https://www.xiaohuo.icu/wp-content/uploads/2024/05/mfile_1740257_1_L_20240213143803.jpg"
    position="center"
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