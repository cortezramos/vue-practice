<script setup lang="ts">
    import { onMounted, onUnmounted } from 'vue';

    onMounted(() => {
        console.log("se monto, llamo a la api")
    })

    onUnmounted(() => {
        console.log("de desmonto")
    })

</script>

<template>
    <h1>Life Cycle</h1>
</template>