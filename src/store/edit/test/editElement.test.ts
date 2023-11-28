import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapEditStore } from '../mapEdit'
import { floorEditElement, playerEditElement, useEditElementStore, wallEditElement } from '../editElement'
import { useEditPlayerStore } from '../editPlayer'

describe('editElement', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const { initMap } = useMapEditStore()
    initMap()
  })
  it('should change to wall when current selected element is wall', () => {
    const { map } = useMapEditStore()
    const { setCurrentSelectedEditElement, getCurrentSelectedEditElement } = useEditElementStore()

    // 多态
    setCurrentSelectedEditElement(wallEditElement)

    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.WALL)
  })

  it('should change to floor when current selected element is floor', () => {
    const { map } = useMapEditStore()
    const { setCurrentSelectedEditElement, getCurrentSelectedEditElement } = useEditElementStore()

    // 多态
    setCurrentSelectedEditElement(floorEditElement)

    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.FLOOR)
  })

  it('should update position of player when current selected element is player', () => {
    const { player } = useEditPlayerStore()

    const { setCurrentSelectedEditElement, getCurrentSelectedEditElement } = useEditElementStore()

    // 多态
    setCurrentSelectedEditElement(playerEditElement)
    const position = { x: 1, y: 1 }

    getCurrentSelectedEditElement().execute(position)

    expect(player.x).toBe(position.x)
    expect(player.y).toBe(position.y)
  })
})
