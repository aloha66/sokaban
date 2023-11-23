import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTargetStore } from '../target'

describe('target', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should clear all target', () => {
    const { addTarget, createTarget, targets, clearAllTarget } = useTargetStore()
    targets.length = 0
    const cargo = createTarget({ x: 5, y: 1 })
    addTarget(cargo)

    addTarget(createTarget({ x: 6, y: 1 }))

    clearAllTarget()

    expect(targets.length).toBe(0)
  })
})
