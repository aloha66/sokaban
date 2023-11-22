<script setup lang="ts">
import targetImg from '~/assets/target.png'
import type { Target } from '~/store/target'

const props = defineProps<Target>()

const { position } = usePosition(props)
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`">
    <img :src="targetImg">
  </div>
</template>
