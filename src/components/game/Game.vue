<script setup lang="ts">
import { levelGameData } from '~/game/gameData'
import { useCargoStore } from '~/store/cargo'
import { useGameStore } from '~/store/game'
import { useTargetStore } from '~/store/target'

const { game, setupGame } = useGameStore()
const { cargos } = useCargoStore()

const { targets } = useTargetStore()

setupGame(levelGameData)
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
