<script setup lang="ts">
import cargoImg from '~/assets/cargo.png'
import type { EditCargo } from '~/store/edit/editCargo'

const props = defineProps<EditCargo>()

const { position } = usePosition(props, STEP_EDIT)
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="cargoImg">
  </div>
</template>
