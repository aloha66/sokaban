import { defineStore } from 'pinia'

// @ts-expect-error let me do it
type MapEdit = MapTile[][]

export const useMapEditStore = defineStore('map-edit', () => {
  const map = reactive<MapEdit>([
    // [2, 2, 2, 2, 2, 2],
    // [2, 2, 2, 2, 2, 2],
    // [2, 2, 2, 2, 2, 2],
    // [2, 2, 2, 2, 2, 2],
  ])

  const row = 8
  const col = 8

  function initMap() {
    for (let i = 0; i < row; i++) {
      const cells = []
      for (let j = 0; j < col; j++)
        cells.push(MapTile.FLOOR)

      map.push(cells)
    }
  }

  return {
    initMap,
    map,
  }
})
