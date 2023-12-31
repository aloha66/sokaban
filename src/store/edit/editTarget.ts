import { defineStore } from 'pinia'
import { generateId } from '~/util/id'

export interface EditTarget {
  x: number
  y: number
  id: number
}

export const useEditTargetStore = defineStore('edit-target', () => {
  const targets = reactive<EditTarget[]>([])

  function createTarget({ x, y }: { x: number; y: number }) {
    return { x, y, id: generateId() }
  }

  function addTarget(target: EditTarget) {
    targets.push(target)
  }

  function removeTarget(target: EditTarget) {
    targets.splice(targets.findIndex(t => t.id === target.id), 1)
  }

  return {
    removeTarget,
    addTarget,
    createTarget,
    targets,
  }
})
