<script setup lang="ts">
    import { ref } from 'vue'

    const number = ref(0)

    const add = () => {
        number.value += 1
    };

</script>

<template>
    <div>
        <h2>Event Component</h2>
        <p>Number: {{ number }}</p>
        <button @click="add">Add</button>
    </div>
</template>