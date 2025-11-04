<script setup lang="ts">
</script>

<template>
    <header>
        <nav>
            <ul>
                <router-link class="link" to="/">Inicio</router-link>
                <router-link class="link" to="/home">Home</router-link>
                <router-link class="link" :to="{ path: 'test'}">Test</router-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        background-color: #333;
        padding: 1em;
        color: white;
    }
    nav {
        margin-top: 1em;
    }
    nav ul {
        list-style: none;
        padding: 0;
    }
    .link {
        display: inline;
        margin-right: 1em;
    }
    nav a {
        color: white;
        text-decoration: none;
    }
    nav a:hover {
        text-decoration: underline;
    }
</style>