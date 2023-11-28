import { defineStore } from 'pinia'

interface editPlayer {
  x: number
  y: number
}

export const useEditPlayerStore = defineStore('editPlayer', () => {
  const player = reactive<editPlayer>({ x: 0, y: 0 })

  return { player }
})
