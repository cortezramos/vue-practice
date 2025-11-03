<script setup lang="ts">

    import { ref, type Ref } from 'vue';

    const emit = defineEmits([
        "login"
    ]);
    
    const displayName: Ref<string> = ref('Erick');

    const login = () => {
        emit("login", displayName.value);
    }

</script>

<template>

    <h2>Child component</h2>
    <p>Nombre de usuario: {{ displayName }}</p>
    <button @click="login">Login</button>

</template>