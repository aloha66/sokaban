import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target'
import { useMapStore } from '../map'

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const { setupMap } = useMapStore()
    /**
     * 跟墙（其他数据）有所关联
     * 需要自备测试数据
     */
    setupMap([
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ])
  })
  
  it('should add a cargo', () => {
    const { addCargo, createCargo, cargos } = useCargoStore()
    cargos.length = 0
    const cargo = createCargo({ x: 5, y: 1 })
    addCargo(cargo)

    expect(cargos.length).toBe(1)
  })

  describe('on target', () => {
    it('shift in', () => {
      const { addCargo, createCargo, moveCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)

      const { addTarget, createTarget } = useTargetStore()
      addTarget(createTarget({ x: 3, y: 1 }))

      moveCargo(cargo, 1, 0)
      expect(cargo.onTarget).toBe(true)
    })

    it('shift out', () => {
      const { addCargo, createCargo, moveCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)

      const { addTarget, createTarget } = useTargetStore()
      addTarget(createTarget({ x: 3, y: 1 }))

      moveCargo(cargo, 1, 0)
      moveCargo(cargo, 1, 0)
      expect(cargo.onTarget).toBe(false)
    })
  })
})
