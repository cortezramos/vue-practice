<script setup lang="ts">
    import { ref, type Ref } from 'vue'
    import ChildEventsEmitComponent from './ChildEventsEmitComponent.vue'

    const displayName: Ref<string> = ref('')

    const setDisplayName = (name: string) => {
        displayName.value = name
    }
</script>

<template>
    <h1> Hola {{ displayName }} </h1>

    <ChildEventsEmitComponent @login="setDisplayName" />
</template>