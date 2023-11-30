import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useEditCargoStore } from '../editCargo'

describe('editCargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should remvoe a cargo', () => {
    const { removeCargo, addCargo, createCargo, cargos } = useEditCargoStore()
    const cargo = createCargo({ x: 1, y: 1 })
    addCargo(cargo)
    const cargo2 = createCargo({ x: 2, y: 2 })
    addCargo(cargo2)
    const cargo3 = createCargo({ x: 3, y: 3 })
    addCargo(cargo3)
    removeCargo(cargo2)
    expect(cargos.length).toBe(2)
    expect(cargos).toMatchInlineSnapshot(`
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
