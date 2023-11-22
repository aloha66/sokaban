import { defineStore } from 'pinia'
import { useMapStore } from './map'
import { useCargoStore } from './cargo'

export interface Player {
  x: number
  y: number
}

export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()

  const player = reactive<Player>({
    x: 1,
    y: 1,
  })

  function _move(dx: number, dy: number) {
    const nextPosition = { x: player.x + dx, y: player.y + dy }
    if (isWall(nextPosition))
      return
    const { findCargo, moveCargo } = useCargoStore()
    const cargo = findCargo(nextPosition)
    if (cargo) {
      // 暴露行为
      const isCargoMove = moveCargo(cargo, dx, dy)
      if (!isCargoMove)
        return
    }

    player.x += dx
    player.y += dy
    // 可在这里检测是否游戏进入下一关
    // 但这样会导致player和game耦合
    // detectionGameCompleted
  }

  function movePlayerToLeft() {
    _move(-1, 0)
  }

  function movePlayerToRight() {
    _move(1, 0)
  }

  function movePlayerToUp() {
    _move(0, -1)
  }

  function movePlayerToDown() {
    _move(0, 1)
  }

  return {
    movePlayerToDown,
    movePlayerToUp,
    movePlayerToRight,
    movePlayerToLeft,
    player,
  }
})
