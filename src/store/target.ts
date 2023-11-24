import { defineStore } from 'pinia'
import { useMapStore } from './map'
import type { Position } from '~/composables/usePosition'

let id = 1
export interface Target {
  id: number
  x: number
  y: number
}

export const useTargetStore = defineStore('target', () => {
  const targets = reactive<Target[]>([])

  function createTarget({ x, y }: { x: number; y: number }) {
    return { x, y, id: id++ }
  }

  function addTarget(target: Target) {
    targets.push(target)
  }

  function findTarget(position: Position) {
    return targets.find(target => target.x === position.x && target.y === position.y)
  }

  function clearAllTarget() {
    targets.splice(0, targets.length)
  }

  return {
    clearAllTarget,
    findTarget,
    addTarget,
    createTarget,
    targets,
  }
})
