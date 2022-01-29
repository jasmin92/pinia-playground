import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async increment() {
      this.count++
    },
  },
})

// same store with composable style
export const useCounterStoreComposable = defineStore('counter', () => {
  const count = ref<number>(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return {
    count,
    doubleCount,
    increment,
  }
})
