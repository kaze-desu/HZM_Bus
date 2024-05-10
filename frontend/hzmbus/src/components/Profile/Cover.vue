<template>
  <div class="image-container" v-hover="handleHover">
    <var-image class="cover" fit="cover" position="50% 60%" src="https://www.xiaohuo.icu/wp-content/uploads/2024/05/cover.jpg" />
    <div class="image-mask" @click="toLogin()"  :style="{ transform: `translateY(${translateY})` }">Register/Login</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const translateY = ref('100%');
const router = useRouter();

defineProps(['login']);
function handleHover(hovering: boolean)
{
  translateY.value = hovering ? '0' : '100%';
}

function toLogin()
{
  router.push({ name: 'login' });
}

</script>
<style>

.image-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
}

.image-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  color: var(--color-on-tertiary-container);
  background-color: #ffffff70;
  font-size: 50px;
}

.cover
{
  width: auto;
  height: 250px;
  object-fit: cover;
}
</style>