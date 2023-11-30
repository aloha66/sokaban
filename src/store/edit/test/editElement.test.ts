import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapEditStore } from '../mapEdit'
import { cargoEditElement, floorEditElement, playerEditElement, useEditElementStore, wallEditElement } from '../editElement'
import { useEditPlayerStore } from '../editPlayer'
import { useEditCargoStore } from '../editCargo'

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

    getCurrentSelectedEditElement()?.execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.WALL)
  })

  it('should change to floor when current selected element is floor', () => {
    const { map } = useMapEditStore()
    const { setCurrentSelectedEditElement, getCurrentSelectedEditElement } = useEditElementStore()

    // 多态
    setCurrentSelectedEditElement(floorEditElement)

    getCurrentSelectedEditElement()?.execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.FLOOR)
  })

  it('should update position of player when current selected element is player', () => {
    const { player } = useEditPlayerStore()

    const { setCurrentSelectedEditElement, getCurrentSelectedEditElement } = useEditElementStore()

    // 多态
    setCurrentSelectedEditElement(playerEditElement)
    const position = { x: 1, y: 1 }

    getCurrentSelectedEditElement()?.execute(position)

    expect(player.x).toBe(position.x)
    expect(player.y).toBe(position.y)
  })

  it('should add a cargo  when current selected element is cargo', () => {
    const { setCurrentSelectedEditElement, getCurrentSelectedEditElement } = useEditElementStore()

    setCurrentSelectedEditElement(cargoEditElement)

    const position = { x: 1, y: 1 }
    getCurrentSelectedEditElement()?.execute(position)

    const { cargos } = useEditCargoStore()

    expect(cargos.length).toBe(1)
    expect(cargos[0].x).toBe(position.x)
    expect(cargos[0].y).toBe(position.y)
  })
})
