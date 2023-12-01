import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useEditTargetStore } from '../editTarget'

describe('editTarget', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should remvoe a target', () => {
    const { createTarget, addTarget, removeTarget, targets } = useEditTargetStore()
    const target = createTarget({ x: 1, y: 1 })
    addTarget(target)
    const target2 = createTarget({ x: 2, y: 2 })
    addTarget(target2)
    const target3 = createTarget({ x: 3, y: 3 })
    addTarget(target3)

    removeTarget(target2)

    expect(targets.length).toBe(2)
    expect(targets).toMatchInlineSnapshot(`
      [
        {
          "id": 0,
          "x": 1,
          "y": 1,
        },
        {
          "id": 2,
          "x": 3,
          "y": 3,
        },
      ]
    `)
  })
})
