import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '../player'
import { useMapStore } from '../map'

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
})
