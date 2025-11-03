<script setup lang="ts">
    import SlotChildComponent from './SlotChildComponent.vue'
</script>

<template>
    <h1>Slots Example</h1>
    <SlotChildComponent>
        <p>This content is passed to the slot!</p>
    </SlotChildComponent>
    <SlotChildComponent>
        <div>Additional content for the default slot.</div>
        <template v-slot:footer>
            <p>This is the footer slot content.</p>
        </template>
    </SlotChildComponent>
</template>