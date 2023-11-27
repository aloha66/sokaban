import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapEditStore } from '../mapEdit'

describe('mapEdit', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should init map', () => {
    const { map, initMap } = useMapEditStore()

    const row = 8
    const col = 8

    initMap()

    expect(map.length).toBe(row)
    expect(map[0].length).toBe(col)
  })

  describe('row', () => {
    it('should add a line when increase', () => {
      const { updateMapRow, setRow, initMap, map } = useMapEditStore()
      initMap(2, 2)
      setRow(3)
      updateMapRow()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })

    it('should desc a line when decrease', () => {
      const { updateMapRow, setRow, initMap, map } = useMapEditStore()
      initMap(3, 3)
      setRow(2)
      updateMapRow()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
          [
            2,
            2,
            2,
          ],
        ]
      `)
    })
  })

  describe('col', () => {
    it('should add a line when increase', () => {
      const { initMap, map, updateMapCol, setCol } = useMapEditStore()

      initMap(2, 2)
      setCol(3)
      updateMapCol()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
          [
            2,
            2,
            2,
          ],
        ]
      `)
    })

    it('should desc a line when decrease', () => {
      const { initMap, map, updateMapCol, setCol } = useMapEditStore()

      initMap(3, 3)
      setCol(2)
      updateMapCol()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })
  })
})
