<script setup lang="ts">
import cargoImg from '~/assets/cargo.png'
import type { Cargo } from '~/store/cargo'

const props = defineProps<Cargo>()

const { position } = usePosition(props)
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="cargoImg">
  </div>
</template>
