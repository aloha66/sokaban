import { defineStore } from 'pinia'
import { useCargoStore } from './cargo'
import { useMapStore } from './map'
import { usePlayerStore } from './player'
import { useTargetStore } from './target'
import type { GameData } from '~/game/gameData'

interface Game {
  isGameCompleted: boolean
  level: number
}

export const useGameStore = defineStore('game', () => {
  const game = reactive<Game>({
    isGameCompleted: false,
    level: 1,
  })
  function detectionGameCompleted() {
    const { cargos } = useCargoStore()

    game.isGameCompleted = cargos.every(cargo => cargo.onTarget)
  }

  function setupGame(gameData: GameData) {
    const levelGameData = gameData[game.level - 1]
    const { player } = usePlayerStore()
    const { setupMap } = useMapStore()
    const { createCargo, addCargo } = useCargoStore()
    const { createTarget, addTarget } = useTargetStore()

    player.x = levelGameData.player.x
    player.y = levelGameData.player.y

    setupMap(levelGameData.map)

    levelGameData.cargos.forEach(cargo => addCargo(createCargo(cargo)))

    levelGameData.targets.forEach(target => addTarget(createTarget(target)))
  }

  return {
    setupGame,
    detectionGameCompleted,
    game,
  }
})
