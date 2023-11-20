import { defineStore } from 'pinia'
import type { Position } from '~/composables/usePosition'

export interface Cargo {
  x: number
  y: number
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = []

  function createCargo({ x, y }: { x: number; y: number }) {
    return { x, y }
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo)
  }

  function findCargo(position: Position) {
    return cargos.find(cargo => cargo.x === position.x && cargo.y === position.y)
  }

  return {
    findCargo,
    addCargo,
    createCargo,
    cargos,
  }
})
