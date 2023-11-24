<script setup lang="ts">
import { gameData } from '~/game/gameData'
import { useCargoStore } from '~/store/cargo'
import { useGameStore } from '~/store/game'
import { useTargetStore } from '~/store/target'

const { game, setupGame, toNextLevel } = useGameStore()
const { cargos } = useCargoStore()

const { targets } = useTargetStore()

setupGame(gameData)
</script>

<template>
  <div>
    <Map />
    <!-- <template v-for="(cargo, i) in cargos" :key="i"> 这样写会说i没有被使用 -->

    <template v-for="target in targets" :key="target.id">
      <Target v-bind="target" />
    </template>
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo v-bind="cargo" />
    </template>

    <Player />

    <div v-if="game.isGameCompleted">
      <button bg-red @click="toNextLevel">
        下一关
      </button>
    </div>
  </div>
</template>
