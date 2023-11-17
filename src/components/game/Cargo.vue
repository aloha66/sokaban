<script setup lang="ts">
import cargoImg from '~/assets/cargo.png'

const cargo = {
  x: 2,
  y: 2,
}


const { position } = usePosition(cargo)
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="cargoImg">
  </div>
</template>
