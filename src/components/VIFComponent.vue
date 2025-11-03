<script setup lang="ts">
    import { ref, type Ref } from 'vue'

    const show: Ref<boolean> = ref(true)
    
    const toggleShow = (): void => {
        show.value = !show.value
    }

</script>

<template>
    <h1 v-if="show"> VIFComponent is shown</h1>
    <button @click="toggleShow">Toggle VIFComponent</button>
</template>