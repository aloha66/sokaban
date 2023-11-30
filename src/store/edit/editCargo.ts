import { defineStore } from 'pinia'
import { generateId } from '~/util/id'

export interface EditCargo {
  x: number
  y: number
  id: number
}

export const useEditCargoStore = defineStore('edit-cargo', () => {
  const cargos = reactive<EditCargo[]>([])

  function createCargo({ x, y }: { x: number; y: number }) {
    return { x, y, id: generateId()}
  }

  function addCargo(cargo: EditCargo) {
    cargos.push(cargo)
  }

  return {
    createCargo,
    addCargo,
    cargos,
  }
})
