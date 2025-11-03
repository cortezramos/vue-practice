<script setup lang="ts">
    import { reactive } from 'vue';

    const movie = reactive({
        title: '',
        director: '',
        duration: 0
    });

    const handleOnSubmit = () => {
        console.log(`Título: ${movie.title}, Director: ${movie.director}, Duración: ${movie.duration} minutos`)
        movie.title = ''
        movie.director = ''
        movie.duration = 0
    }
    
</script>

<template>
    <form @submit.prevent="handleOnSubmit">
        <label for="title">Título:</label>
        <input id="title" v-model="movie.title" type="text" />
        <label for="director">Director:</label>
        <input id="director" v-model="movie.director" type="text" />
        <label for="duration">Duración (min):</label>
        <input id="duration" v-model="movie.duration" type="number" />
        <button type="submit">Agregar película</button>
    </form>
</template>
