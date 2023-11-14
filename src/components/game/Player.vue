<script setup lang="ts">
import keeperImg from '~/assets/keeper.png'
import { usePlayerStore } from '~/store/player'

const { player, movePlayerToLeft } = usePlayerStore()

const STEP = 32

const position = computed(() => ({
  left: `${player.x * STEP}px`,
  top: `${player.y * STEP}px`,

}))

window.addEventListener('keyup', (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowLeft':
      movePlayerToLeft()

      break

    default:
      break
  }
})
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="keeperImg">
  </div>
</template>
