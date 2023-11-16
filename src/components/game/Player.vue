<script setup lang="ts">
import { useMove } from './player'
import keeperImg from '~/assets/keeper.png'
import { usePlayerStore } from '~/store/player'

function usePosition() {
  const { player } = usePlayerStore()

  const STEP = 32

  const position = computed(() => ({
    left: `${player.x * STEP}px`,
    top: `${player.y * STEP}px`,

  }))

  return { position }
}

useMove()

const { position } = usePosition()
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="keeperImg">
  </div>
</template>
