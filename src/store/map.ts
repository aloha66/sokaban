import { defineStore } from 'pinia'

// eslint-disable-next-line no-restricted-syntax
export const enum MapTile {
  WALL = 1,
  FLOOR,
}

export const useMapStore = defineStore('map', () => {
  const map = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ]

  function setupMap(newMap: MapTile[][]) {
    // 修改引用 map = newMap
    // toEqual值没有发生改变
    map.splice(0, map.length, ...newMap)
  }

  return {
    /**
     * 导出去的值是原来的值
     * [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
     */
    map, setupMap }
})
