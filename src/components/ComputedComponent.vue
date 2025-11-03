<script setup lang="ts">
    import { computed, ref } from 'vue'

    const name = ref('Test')
    const nameLength = computed(() => {
        return name.value.length
    })
</script>

<template>

    <h1>Computed Properties Component</h1>

    <input v-model="name" placeholder="Escribe tu nombre"/>
    <h2>Hola {{ name }}</h2>
    <h3>El nombre tiene {{ nameLength }} caracteres</h3>
</template>