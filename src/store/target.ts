import { defineStore } from 'pinia'
import { useMapStore } from './map'
import type { Position } from '~/composables/usePosition'

export interface Target {
  x: number
  y: number
}

export const useTargetStore = defineStore('target', () => {
  const targets = reactive<Target[]>([])

  function createTarget({ x, y }: { x: number; y: number }) {
    return { x, y }
  }

  function addTarget(target: Target) {
    targets.push(target)
  }

  function findTarget(position: Position) {
    return targets.find(target => target.x === position.x && target.y === position.y)
  }

  function moveTarget(target: Target, dx: number, dy: number) {
    const { isWall } = useMapStore()
    const position = { x: target.x + dx, y: target.y + dy }

    if (isWall(position))
      return false

    if (findTarget(position))
      return

    target.x += dx
    target.y += dy
    return true
  }

  function clearAllTarget() {
    targets.splice(0, targets.length)
  }

  return {
    clearAllTarget,
    moveTarget,
    findTarget,
    addTarget,
    createTarget,
    targets,
  }
})
