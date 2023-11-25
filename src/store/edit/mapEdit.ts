import { defineStore } from 'pinia'

interface EditElement {
  name: 'floor' | 'wall'
}

export const useMapEditStore = defineStore('map-edit', () => {
  const map = reactive([
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
  ])

  let currentSelectedEditElement: EditElement

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement
  }

  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement = editElement
  }

  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement,
    map,
  }
})
