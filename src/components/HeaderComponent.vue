<script setup lang="ts">
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
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
    nav li {
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