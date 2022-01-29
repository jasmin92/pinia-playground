<script setup lang="ts">
import { useCounterStoreComposable } from './stores/counter'
import DisplayCount from './components/DisplayCount.vue'

const counterStore = useCounterStoreComposable()
</script>

<template>
  <div>{{ counterStore.count }}</div>
  <button @click="counterStore.increment">Increment</button>

  <div>
    asas
    <DisplayCount></DisplayCount>
  </div>
</template>

<style></style>
