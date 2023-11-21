import { defineStore } from 'pinia'
import { useMapStore } from './map'
import { useTargetStore } from './target'
import type { Position } from '~/composables/usePosition'

export interface Cargo {
  x: number
  y: number
  onTarget: boolean
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([])

  function createCargo({ x, y }: { x: number; y: number }) {
    return { x, y, onTarget: false }
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo)
  }

  function findCargo(position: Position) {
    return cargos.find(cargo => cargo.x === position.x && cargo.y === position.y)
  }

  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const { isWall } = useMapStore()
    const { findTarget } = useTargetStore()
    const position = { x: cargo.x + dx, y: cargo.y + dy }

    if (isWall(position))
      return false

    if (findCargo(position))
      return

    cargo.x += dx
    cargo.y += dy

    // 这里还是一个低层次的代码
    cargo.onTarget = !!findTarget({ x: cargo.x, y: cargo.y })
    return true
  }

  return {
    moveCargo,
    findCargo,
    addCargo,
    createCargo,
    cargos,
  }
})
