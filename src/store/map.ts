import { defineStore } from 'pinia'

// eslint-disable-next-line no-restricted-syntax
export const enum MapTile {
  WALL = 1,
  FLOOR
}

export const useMapStore = defineStore('map', () => {
  const map = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ]

  return { map }
})
