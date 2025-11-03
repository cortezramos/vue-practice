<script setup lang="ts">
    import { ref, type Ref } from 'vue'

    const modelValue: Ref<string> = ref('Modelo de Entrada')
</script>

<template>
  <div>
    <h1> {{ modelValue }} </h1>
    <input type="text" v-model="modelValue" />
  </div>
</template>