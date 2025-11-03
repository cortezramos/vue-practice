<script setup lang="ts">
    const items = [
        { id: 1, name: 'Item One' },
        { id: 2, name: 'Item Two' },
        { id: 3, name: 'Item Three' },
    ]

    const itemsIndex = [
        'Item Index One',
        'Item Index Two',
        'Item Index Three',
    ]
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
        {{ item.name }}
    </li>
  </ul>

  <ul>  
      <li v-for="(item, index) in itemsIndex" :key="index">
          {{ index + 1 }} - {{ item }}
      </li>
  </ul>
</template>