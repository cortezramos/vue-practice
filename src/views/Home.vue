<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

</script>

<template>
    <h1>Welcome home</h1>

    <h2 id="counter"> Counter: {{ counter }} </h2>
    <button id="counter-btn" @click="counter++">sumar</button>
</template>

<style scoped>
    h1 { background-color: aqua;}
</style>