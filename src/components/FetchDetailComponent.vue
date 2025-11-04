<script setup lang="ts">
import { useFetchStore } from '../stores/fetchStore.store';

    const fetchStore = useFetchStore()

</script>

<template>
    <div class="login-bar">
        <p v-if="fetchStore.user" class="username" >{{ fetchStore.user.name }}</p>
        <button @click="fetchStore.getUser(7)">
            Login
        </button>
    </div>
</template>

<style scoped>
    .login-bar {
        width: 100%;
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        justify-content: end;
        .username {
            margin: 0;
            padding-right: 10px;
        }
    }
</style>