<script setup lang="ts">
    import {ref, type Ref} from 'vue'

    let myCondition: Ref<boolean> = ref(true)

    const toggleCondition = () => {
        myCondition.value = !myCondition.value
    }
</script>

<template>
    <h1 :class="{ highlight: myCondition }" >Dynamic classes</h1>

    <button @click="toggleCondition">Toggle Highlight</button>
</template>

<style scoped>
    .highlight {
        background-color: yellow;
    }
</style>