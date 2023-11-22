<script setup lang="ts">
import { useCargoStore } from '~/store/cargo'
import { useGameStore } from '~/store/game'
import { useMapStore } from '~/store/map';
import { usePlayerStore } from '~/store/player'
import { useTargetStore } from '~/store/target'

const { cargos, addCargo, createCargo } = useCargoStore()

addCargo(createCargo({ x: 2, y: 2 }))
addCargo(createCargo({ x: 3, y: 3 }))

const { targets, addTarget, createTarget } = useTargetStore()

addTarget(createTarget({ x: 4, y: 3 }))
addTarget(createTarget({ x: 6, y: 3 }))

const { game } = useGameStore()

const { player } = usePlayerStore()

player.x = 1
player.y = 1

const {setupMap} = useMapStore()
setupMap([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ])
</script>

<template>
  <div>
    <Map />
    <!-- <template v-for="(cargo, i) in cargos" :key="i"> 这样写会说i没有被使用 -->

    <template v-for="target in targets">
      <Target v-bind="target" />
    </template>
    <template v-for="cargo in cargos">
      <Cargo v-bind="cargo" />
    </template>

    <Player />

    <div v-if="game.isGameCompleted">
      <button bg-red>
        下一关
      </button>
    </div>
  </div>
</template>
