import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCargoStore } from '../cargo'

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should add a cargo', () => {
    const { addCargo, createCargo, cargos } = useCargoStore()
    cargos.length = 0
    const cargo = createCargo({ x: 5, y: 1 })
    addCargo(cargo)

    expect(cargos.length).toBe(1)
  })
})
