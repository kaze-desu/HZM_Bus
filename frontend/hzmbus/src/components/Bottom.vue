<template>
    <var-app-bar title="HZM BUS" title-position="center" safe-area-top/>
    <p></p>
    <router-view/>
    <p style="margin-top: 10%;"></p>
    <var-bottom-navigation variant  v-model:active="active" @change="handleChange" class="bottom" fixed>
    <var-bottom-navigation-item name="buy" label="Store" icon="shopping"/>
    <var-bottom-navigation-item name="time" label="TimeTable" icon="magnify" />
    <var-bottom-navigation-item name="profile" label="Profile" icon="account-circle" />
    </var-bottom-navigation>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'
import { useRouter,RouterView } from 'vue-router'
const active= ref('')
const router = useRouter()

function handleChange()
{
    router.push({ name: active.value })
}
watch(ref(router.currentRoute),(newRoute) => {
    if(newRoute.name!=active.value)
    {
        active.value=''
    }
})

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