<template>
    <var-row :gutter="[10, 10]" justify="center">
        <var-col direction="column">
            <var-image class="cover" fit="cover" position="50% 60%" src="https://www.xiaohuo.icu/wp-content/uploads/2024/05/cover.jpg" :radius="10"/>
        </var-col>
        <var-col direction="column">
            <var-input variant="outlined" placeholder="Username" v-model="username" :rules="[(v) => v.length > 8 || 'Minimum 8 words at least']"  class="input"/>
            <span class="item">Please enter your username</span>
            <var-input variant="outlined" placeholder="Password" v-model="password" :rules ="[(v) => v.length > 8 || 'Minimum 8 words at least']"  class="input"/>
            <span class="item">Please enter your password</span>
        </var-col>
        <var-col direction="column">
            <var-button type="primary" class="button" size="large" @click="login(username,password)">Login/Register</var-button>
        </var-col>
    </var-row>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useAuth from '@/hooks/useAuth';
import { useSessionStore } from '@/store/Session';
import { useRouter } from 'vue-router';
import { Snackbar } from '@varlet/ui';

const { login } = useAuth();
const username = ref('');
const password = ref('');
onMounted(() => {
    if(useSessionStore().status)
    {
        setTimeout(() => {
            Snackbar["success"]("You have already logged in.");
        }, 1000);
        useRouter().back();
    }
})
</script>

<style scoped>
.input
{
    margin-left: 6%;
    margin-right: 6%;
    padding-top: 10px;
}
.cover
{
    margin-left: 5%;
    margin-right: 5%;
}
.item
{
    margin-left: 6%;
    margin-right: 6%;
    padding-top: 3px;
    font-size: 12px;
    color: #49454F;
}
.button
{
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 50px;
}
</style>