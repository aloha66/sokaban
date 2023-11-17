<script setup lang="ts">
import { useMove } from './player'
import keeperImg from '~/assets/keeper.png'
import { usePlayerStore } from '~/store/player'

useMove()

const { player } = usePlayerStore()

const { position } = usePosition(player)
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="keeperImg">
  </div>
</template>
