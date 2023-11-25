import { defineStore } from 'pinia'
import { useMapEditStore } from './mapEdit'
import type { Position } from '~/composables/usePosition'

export interface EditElement {
  execute: (position: Position) => void
}

export const wallEditElement: EditElement = {
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  },
}

export const floorEditElement: EditElement = {
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  },
}

export const useEditElementStore = defineStore('edit-element', () => {
  let currentSelectedEditElement: EditElement

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement
  }

  // 设置多态
  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement = editElement
  }

  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement,
  }
})
