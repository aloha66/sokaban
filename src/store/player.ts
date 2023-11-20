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

    /**
     * player的移动和cargo的移动是耦合在一起
     */
    if (cargo) {
      /**
       * 针对cargo的移动判定
       * 目前是放在了player.ts里面了
       * 应该放回cargo，暴露一个方法，隐藏细节
       * moveCargo
       */
      
      if (isWall({ x: cargo.x + dx, y: cargo.y + dy }))
        return
      cargo.x += dx
      cargo.y += dy
    }

    player.x += dx
    player.y += dy
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
