<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterState = useCounterStore()
</script>

<template>
  <div>{{ counterState.count }}</div>
</template>
