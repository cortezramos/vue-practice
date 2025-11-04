<script setup lang="ts">
import { useGeneralStore } from '../stores/general.store';

    const general = useGeneralStore();
    const { generalData } = general
</script>

<template>
    <ul>
        <li v-for="general in generalData" :key="general.id" >
            <p> {{ general.title }}</p>
        </li>
    </ul>
</template>