import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMove } from '../player'
import { useSetup } from '../../../../test/hepler/component'
import { usePlayerStore } from '~/store/player'

// 群居测试向左移动
// 按左键 + 向左移动
describe.skip('群居测试', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should move to left when press ArrowLeft', () => {
    useSetup(() => {
      useMove()
    })

    const { player } = usePlayerStore()
    player.x = 1
    player.y = 1

    window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))

    expect(player.x).toBe(0)
    expect(player.y).toBe(1)
  })
})
