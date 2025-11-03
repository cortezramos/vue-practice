<script setup lang="ts">
    import { ref, type Ref, watchEffect} from 'vue'

    const userName: Ref<string> = ref("Usuario1")

    const changeUser = () => {
        userName.value = "Erick"
    }

    watchEffect(() => {
        console.log("El valor de algunas variables ha cambiado")
    })
</script>

<template>
    <h1>WatchEffect | Vigilar cambios</h1>
    <h2> Vigialando: {{ userName }} </h2>
    <button @click="changeUser">
        Cambiar de usuario
    </button>
</template>