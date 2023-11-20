import { defineStore } from 'pinia'
import { useMapStore } from './map'
import { useCargoStore } from './cargo'

export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()

  const player = reactive({
    x: 1,
    y: 1,
  })

  function movePlayerToLeft() {
    if (isWall({ x: player.x - 1, y: player.y }))
      return
    const { findCargo } = useCargoStore()
    const cargo = findCargo({ x: player.x - 1, y: player.y })
    if (cargo)
      cargo.x--
    player.x--
  }

  function movePlayerToRight() {
    if (isWall({ x: player.x + 1, y: player.y }))
      return
    player.x++
  }

  function movePlayerToUp() {
    if (isWall({ x: player.x, y: player.y - 1 }))
      return
    player.y--
  }

  function movePlayerToDown() {
    if (isWall({ x: player.x, y: player.y + 1 }))
      return
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
