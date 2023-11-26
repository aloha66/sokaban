import { defineStore } from 'pinia'

// @ts-expect-error let me do it
type MapEdit = MapTile[][]

export const useMapEditStore = defineStore('map-edit', () => {
  const map = reactive<MapEdit>([])

  const row = ref(8)
  const col = ref(8)

  function initMap(_row?: number, _col?: number) {
    if (_row)
      row.value = _row
    if (_col)
      col.value = _col

    for (let i = 0; i < row.value; i++) {
      const cells = []
      for (let j = 0; j < col.value; j++)
        cells.push(MapTile.FLOOR)

      map.push(cells)
    }
  }

  function updateMapRow() {
    // 新的比旧的多 是新增
    // row 新
    // map.length 旧
    const oldRow = map.length
    if (row.value > oldRow)
    // 添加伪实现
      map.push([2, 2])
      // return [
      //   [2, 2],
      //   [2, 2],
      //   [2, 2],
      // ]
  }

  /**
   * pinia在导出之后会自动解包value
   * 则外部拿到的row是number类型，而不是Ref<number>
   * 导致无法直接修改函数内部的row.value的值
   * 所以需要提供set方法
   * @param _row 行数
   */
  function setRow(_row: number) {
    row.value = _row
  }

  return {
    setRow,
    updateMapRow,
    row,
    col,
    initMap,
    map,
  }
})
