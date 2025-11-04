<script setup lang="ts">
import { useRoute } from 'vue-router';

    const route = useRoute()
    const { testId } = route.params
</script>

<template>
    <h2>Detalle de datos</h2>
    <p> Parametro enviado es {{ testId }} </p>
</template>