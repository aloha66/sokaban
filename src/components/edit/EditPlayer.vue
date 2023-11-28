<script setup lang="ts">
import keeperImg from '~/assets/keeper.png'
import { useEditPlayerStore } from '~/store/edit/editPlayer'

const { player } = useEditPlayerStore()

const { position } = usePosition(player, STEP_EDIT)
</script>

<template>
  <div absolute left-0 top-0 border border-blue-400 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="keeperImg">
  </div>
</template>
