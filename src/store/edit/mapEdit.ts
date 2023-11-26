import { defineStore } from 'pinia'

// @ts-expect-error let me do it
type MapEdit = MapTile[][]

export const useMapEditStore = defineStore('map-edit', () => {
  const map = reactive<MapEdit>([])

  const row = ref(8)
  const col = ref(8)

  function initMap() {
    for (let i = 0; i < row.value; i++) {
      const cells = []
      for (let j = 0; j < col.value; j++)
        cells.push(MapTile.FLOOR)

      map.push(cells)
    }
  }

  return {
    row,
    col,
    initMap,
    map,
  }
})
