<script setup lang="ts">
import keeperImg from '~/assets/keeper.png'

const { position } = usePosition({ x: 1, y: 1 }, STEP_EDIT)
</script>

<template>
  <div absolute left-0 top-0 border border-blue-400 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="keeperImg">
  </div>
</template>
