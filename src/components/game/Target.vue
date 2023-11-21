<script setup lang="ts">
import targetImg from '~/assets/target.png'
import type { Cargo } from '~/store/cargo'

const props = defineProps<Cargo>()

const { position } = usePosition(props)
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="targetImg">
  </div>
</template>
