import { defineStore } from 'pinia'
import { useMapStore } from './map'
import { useCargoStore } from './cargo'

export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()

  const player = reactive({
    x: 1,
    y: 1,
  })

  function _move(dx: number, dy: number) {
    const nextPosition = { x: player.x + dx, y: player.y + dy }
    if (isWall(nextPosition))
      return
    const { findCargo } = useCargoStore()
    const cargo = findCargo(nextPosition)
    if (cargo) {
      cargo.x += dx
      cargo.y += dy
    }

    player.x += dx
    player.y += dy
  }

  function movePlayerToLeft() {
    _move(-1,0)
  }

  function movePlayerToRight() {
    _move(1,0)
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
