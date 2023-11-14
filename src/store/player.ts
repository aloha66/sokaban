import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1,
  })

  function movePlayerToLeft() {
    player.x--
  }

  function movePlayerToRight() {
    player.x++
  }

  function movePlayerToUp() {
    player.y--
  }

  function movePlayerToDown() {
    player.y++
  }

  return {
    movePlayerToDown,
    movePlayerToUp,
    movePlayerToRight,
    movePlayerToLeft,
    player,
  }
})
