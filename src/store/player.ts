import { defineStore } from 'pinia'
import { MapTile, useMapStore } from './map'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1,
  })

  function movePlayerToLeft() {
    const { isWall } = useMapStore()

    if (isWall({ x: player.x - 1, y: player.y }))
      return
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
