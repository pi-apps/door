import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSysStore = defineStore('sys', () => {
  const collapse1 = ref(false)
  return { collapse1 }
})
