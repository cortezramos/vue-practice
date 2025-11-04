<script setup lang="ts">
  import FirstComponent from './components/FirstComponent.vue'
  import HeaderComponent from './components/HeaderComponent.vue'
  import VariableComponent from './components/VariableComponent.vue'
  import EventComponent from './components/EventComponent.vue'
  import BindComponent from './components/BindComponent.vue'
  import ModelComponent from './components/ModelComponent.vue'
  import DynamicClassesComponent from './components/DynamicClassesComponent.vue'
  import VIFComponent from './components/VIFComponent.vue'
  import VFORComponent from './components/VFORComponent.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import EventsEmitComponent from './components/EventsEmitComponent.vue'
  import SlotsComponent from './components/SlotsComponent.vue'
  import ComputedComponent from './components/ComputedComponent.vue'
  import WatchComponent from './components/WatchComponent.vue'
import FormComponent from './components/FormComponent.vue'
import StoreComponent from './components/StoreComponent.vue'

  const propForChild = 'Props in vue'
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <StoreComponent />
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg="propForChild"/>
  <VariableComponent />
  <FirstComponent />
  <EventComponent />
  <BindComponent />
  <ModelComponent />
  <DynamicClassesComponent />
  <VIFComponent />
  <VFORComponent />
  <EventsEmitComponent />
  <SlotsComponent />
  <ComputedComponent />
  <WatchComponent />
  <FormComponent />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
