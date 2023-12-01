<script setup lang="ts">
import type { LevelGameData } from '~/game/gameData'
import { useEditCargoStore } from '~/store/edit/editCargo'
import { useEditPlayerStore } from '~/store/edit/editPlayer'
import { useEditTargetStore } from '~/store/edit/editTarget'
import { useMapEditStore } from '~/store/edit/mapEdit'

const { map } = useMapEditStore()
const { player } = useEditPlayerStore()
const { cargos } = useEditCargoStore()
const { targets } = useEditTargetStore()

function format(data: { x: number; y: number }[]) {
  return data.map(({ x, y }) => ({ x, y }))
}

const gameData = computed<LevelGameData>(() => {
  return {
    map,
    player,
    cargos:format(cargos),
    targets:format(targets),
  }
})
</script>

<template>
  <div>
    <h2>数据展示区</h2>
    <textarea>{{ gameData }}</textarea>
  </div>
</template>
