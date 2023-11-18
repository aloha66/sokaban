import { defineStore } from 'pinia'

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

  return {
    addCargo,
    createCargo,
    cargos,
  }
})
