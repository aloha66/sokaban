import { defineStore } from 'pinia'
import { useMapStore } from './map'
import { useTargetStore } from './target'
import type { Position } from '~/composables/usePosition'
import { generateId } from '~/util/id'


export interface Cargo {
  id: number
  x: number
  y: number
  onTarget: boolean
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([])

  function createCargo({ x, y }: { x: number; y: number }) {
    return { x, y, onTarget: false, id: generateId() }
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo)
  }

  function findCargo(position: Position) {
    return cargos.find(cargo => cargo.x === position.x && cargo.y === position.y)
  }

  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const { isWall } = useMapStore()

    const position = { x: cargo.x + dx, y: cargo.y + dy }

    if (isWall(position))
      return false

    if (findCargo(position))
      return

    cargo.x += dx
    cargo.y += dy

    detectionTarget(cargo)

    return true
  }

  function detectionTarget(cargo: Cargo) {
    const { findTarget } = useTargetStore()
    cargo.onTarget = !!findTarget({ x: cargo.x, y: cargo.y })
  }

  function clearAllCargo() {
    cargos.splice(0, cargos.length)
  }

  return {
    clearAllCargo,
    moveCargo,
    findCargo,
    addCargo,
    createCargo,
    cargos,
  }
})
