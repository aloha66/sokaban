import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '../player'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should move to left', () => {
    const { player, movePlayerToLeft } = usePlayerStore()
    player.x = 1
    player.y = 1

    movePlayerToLeft()

    expect(player.x).toBe(0)
    expect(player.y).toBe(1)
  })
})
