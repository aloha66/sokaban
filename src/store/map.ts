import { defineStore } from 'pinia'

// eslint-disable-next-line no-restricted-syntax
export const enum MapTile {
  WALL = 1,
  FLOOR,
}

interface Position {
  x: number
  y: number
}

export type Map = MapTile[][]

export const useMapStore = defineStore('map', () => {
  const map = reactive<Map>([])

  function setupMap(newMap: Map) {
    // 修改引用 map = newMap
    // toEqual值没有发生改变
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Position) {
    // 提供方法，隐藏细节
    // 脱离过程式代码，提高封装性
    return map[position.y][position.x] === MapTile.WALL
  }

  return {
    isWall,
    setupMap,
    /**
     * 导出去的值是原来的值
     * [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
     */
    map,
  }
})
