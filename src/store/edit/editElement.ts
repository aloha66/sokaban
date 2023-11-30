import { defineStore } from 'pinia'
import { useMapEditStore } from './mapEdit'
import { useEditPlayerStore } from './editPlayer'
import { useEditCargoStore } from './editCargo'
import type { Position } from '~/composables/usePosition'
import wallImg from '~/assets/wall.png'
import floorImg from '~/assets/floor.png'
import keeperImg from '~/assets/keeper.png'
import cargoImg from '~/assets/cargo.png'

export interface EditElement {
  name: string
  img: string
  execute: (position: Position) => void
}

export const wallEditElement: EditElement = {
  name: '墙',
  img: wallImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  },
}

export const floorEditElement: EditElement = {
  name: '地板',
  img: floorImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  },
}

export const playerEditElement: EditElement = {
  name: '玩家',
  img: keeperImg,
  execute: (position) => {
    const { player } = useEditPlayerStore()
    player.x = position.x
    player.y = position.y
  },
}

export const cargoEditElement: EditElement = {
  name: '箱子',
  img: cargoImg,
  execute: (position) => {
    const { createCargo, addCargo } = useEditCargoStore()
    addCargo(createCargo(position))
  },
}

/**
 * 开闭原则
 * 对扩展开放，对修改关闭
 */
export const useEditElementStore = defineStore('edit-element', () => {
  const currentSelectedEditElement = ref<EditElement>()

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement.value
  }

  // 设置多态
  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement.value = editElement
  }

  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement,
  }
})
