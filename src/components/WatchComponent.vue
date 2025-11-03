<script setup lang="ts">
    import { ref, type Ref, watch } from 'vue'

    const userName: Ref<string> = ref("Usuario1")

    const changeUser = () => {
        userName.value = "Erick"
    }

    watch(userName, 
        (newUserName, oldUserName) => {
        console.log("El valor de userName ha cambiado de:", oldUserName, "a:", newUserName)
    },
    { 
        immediate: true,
        //deep: false
     })

</script>

<template>
    <h1>Watch | Vigilar cambios</h1>
    <h2> Vigialando: {{ userName }} </h2>
    <button @click="changeUser">
        Cambiar de usuario
    </button>
</template>