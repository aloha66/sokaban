import { defineStore } from 'pinia'
import { useMapEditStore } from './mapEdit'
import type { Position } from '~/composables/usePosition'
import wallImg from '~/assets/wall.png'
import floorImg from '~/assets/floor.png'

export interface EditElement {
  img: string
  execute: (position: Position) => void
}

export const wallEditElement: EditElement = {
  img: wallImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  },
}

export const floorEditElement: EditElement = {
  img: floorImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  },
}

/**
 * 开闭原则
 * 对扩展开放，对修改关闭
 */
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
