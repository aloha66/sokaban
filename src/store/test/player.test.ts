import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '../player'
import { useMapStore } from '../map'
import { useCargoStore } from '../cargo'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('normal move', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      /**
       * 跟墙（其他数据）有所关联
       * 需要自备测试数据
       */
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    })

    // 独居测试向左移动
    it('should move to left', () => {
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(0)
      expect(player.y).toBe(1)
    })

    it('should move to right', () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(2)
      expect(player.y).toBe(1)
    })

    it('should move to up', () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToUp()

      expect(player.x).toBe(1)
      expect(player.y).toBe(0)
    })

    it('should move to down', () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToDown()

      expect(player.x).toBe(1)
      expect(player.y).toBe(2)
    })
  })

  describe('collision wall', () => {
    beforeEach(() => {
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

    it('should not move to left when collision a wall', () => {
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(1)
      expect(player.y).toBe(1)
    })

    it('should not move to right when collision a wall', () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 6
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(6)
      expect(player.y).toBe(1)
    })

    it('should not move to up when collision a wall', () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToUp()

      expect(player.x).toBe(1)
      expect(player.y).toBe(1)
    })

    it('should not move to down when collision a wall', () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 3

      movePlayerToDown()

      expect(player.x).toBe(1)
      expect(player.y).toBe(3)
    })
  })

  describe('push a cargo', () => {
    beforeEach(() => {
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

    it('should push a cargo to left', () => {
      /**
       * 由单元测试驱动出前门测试
       * 设置动态数据
       */
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 5, y: 1 })
      addCargo(cargo)
      const { player, movePlayerToLeft } = usePlayerStore()

      player.x = 6
      player.y = 1

      movePlayerToLeft()

      expect(cargo.x).toBe(4)
      expect(cargo.y).toBe(1)
      expect(player.x).toBe(5)
      expect(player.y).toBe(1)
    })

    it('should push a cargo to right', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)
      const { player, movePlayerToRight } = usePlayerStore()

      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(cargo.x).toBe(3)
      expect(cargo.y).toBe(1)
      expect(player.x).toBe(2)
      expect(player.y).toBe(1)
    })

    it('should push a cargo to up', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)
      const { player, movePlayerToUp } = usePlayerStore()

      player.x = 1
      player.y = 3

      movePlayerToUp()

      expect(cargo.x).toBe(1)
      expect(cargo.y).toBe(1)
      expect(player.x).toBe(1)
      expect(player.y).toBe(2)
    })

    it('should push a cargo to down', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)
      const { player, movePlayerToDown } = usePlayerStore()

      player.x = 1
      player.y = 1

      movePlayerToDown()

      expect(cargo.x).toBe(1)
      expect(cargo.y).toBe(3)
      expect(player.x).toBe(1)
      expect(player.y).toBe(2)
    })

    it('should not push cargo when the cargo hits wall',() => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 1 })
      addCargo(cargo)
      const { player, movePlayerToLeft } = usePlayerStore()

      player.x = 2
      player.y = 1

      movePlayerToLeft()

      expect(cargo.x).toBe(1)
      expect(cargo.y).toBe(1)
      expect(player.x).toBe(2)
      expect(player.y).toBe(1)
    })

    it('should not push cargo when the cargo hits other cargo',() => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)

      const cargo2 = createCargo({ x: 3, y: 1 })
      addCargo(cargo2)
      const { player, movePlayerToRight } = usePlayerStore()

      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(cargo.x).toBe(2)
      expect(cargo.y).toBe(1)
      expect(cargo2.x).toBe(3)
      expect(cargo2.y).toBe(1)
      expect(player.x).toBe(1)
      expect(player.y).toBe(1)
    })
  })
})
