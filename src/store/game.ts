import { defineStore } from 'pinia'
import { useCargoStore } from './cargo'

interface Game {
  isGameCompleted: boolean
}

export const useGameStore = defineStore('game', () => {
  const game = reactive<Game>({
    isGameCompleted: false,
  })
  function detectionGameCompleted() {
    const { cargos } = useCargoStore()

    game.isGameCompleted = cargos.every(cargo => cargo.onTarget)
  }

  return {
    detectionGameCompleted,
    game
  }
})
