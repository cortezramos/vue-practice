<script setup lang="ts">
    import { ref } from 'vue'
    let number = ref(0);
    let autoIncrement = ref(0)

    setInterval(() => {
        autoIncrement.value++
    }, 1000);
</script>

<template>
    <div>
        <h1>Variable Component</h1>
        <p>Current number: {{ number }}</p>
        <button @click="number++">Increment</button>
        <p>Auto Increment: {{ autoIncrement }}</p>
    </div>
</template>