<script setup lang="ts">
    import { ref } from 'vue'

    const paragraph: string = "paragraph"
    const inputBind: string = ref("textInput").value
</script>

<template>
    <div>
        <h1>Variable Component</h1>
        <p :id="paragraph">Text paragraph</p>
        <input type="text" :value="inputBind" />
    </div>
</template>