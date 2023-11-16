<script setup lang="ts">
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

// 用函数代表代码的意图（封装）

function useMove() {
  const { movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown } = usePlayerStore()
  window.addEventListener('keyup', (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowLeft':
        movePlayerToLeft()
        break
      case 'ArrowRight':
        movePlayerToRight()
        break
      case 'ArrowUp':
        movePlayerToUp()
        break
      case 'ArrowDown':
        movePlayerToDown()
        break

      default:
        break
    }
  })
}

useMove()

const {position} = usePosition()
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="keeperImg">
  </div>
</template>
