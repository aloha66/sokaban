import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target'
import { useGameStore } from '../game'
import { useMapStore } from '../map'
import { usePlayerStore } from '../player'
import type { LevelGameData } from '~/game/gameData'

const firstGameData = {
  player: { x: 1, y: 1 },
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  cargos: [{ x: 2, y: 2 }, { x: 3, y: 3 }],
  targets: [{ x: 4, y: 3 }, { x: 6, y: 3 }],
}

const secondGameData = {
  player: { x: 2, y: 1 },
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  cargos: [{ x: 2, y: 2 }, { x: 3, y: 3 }],
  targets: [{ x: 4, y: 3 }, { x: 6, y: 3 }],
}

const gameData = [firstGameData, secondGameData]

function expectSetupLevelGameData(levelGameData: LevelGameData) {
  const { player } = usePlayerStore()
  const { map } = useMapStore()
  const { cargos } = useCargoStore()
  const { targets } = useTargetStore()

  expect(player.x).toBe(levelGameData.player.x)
  expect(player.y).toBe(levelGameData.player.y)
  expect(map).toEqual(levelGameData.map)
  expect(cargos.length).toBe(levelGameData.cargos.length)
  expect(targets.length).toBe(levelGameData.targets.length)
}

describe('game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const { setupMap } = useMapStore()
    /**
     * 跟墙（其他数据）有所关联
     * 需要自备测试数据
     */
    setupMap([
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ])
  })

  it('should game completed', () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)

    const { addTarget, createTarget } = useTargetStore()
    addTarget(createTarget({ x: 3, y: 1 }))
    // 通过调用方法（前门测试）达到目的（改造成本最少）

    moveCargo(cargo, 1, 0)

    const { detectionGameCompleted, game } = useGameStore()
    detectionGameCompleted()
    expect(game.isGameCompleted).toBe(true)
  })

  it('should not game completed', () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)

    const { addTarget, createTarget } = useTargetStore()
    addTarget(createTarget({ x: 3, y: 1 }))
    // 通过调用方法（前门测试）达到目的（改造成本最少）

    moveCargo(cargo, 1, 0)
    moveCargo(cargo, 1, 0)

    const { detectionGameCompleted, game } = useGameStore()
    detectionGameCompleted()
    expect(game.isGameCompleted).toBe(false)
  })

  it('should setup game', () => {
    const { setupGame } = useGameStore()

    setupGame(gameData)
    expectSetupLevelGameData(firstGameData)
  })

  it('should next to level', () => {
    const { setupGame, toNextLevel, game } = useGameStore()

    setupGame(gameData)

    toNextLevel()

    expectSetupLevelGameData(secondGameData)
    expect(game.level).toBe(2)
  })

  it('should reset game compeletd when to next level', () => {
    const { setupGame, toNextLevel, game } = useGameStore()
    game.isGameCompleted = true

    setupGame(gameData)

    toNextLevel()

    expectSetupLevelGameData(secondGameData)
    expect(game.isGameCompleted).toBe(false)
  })
})
