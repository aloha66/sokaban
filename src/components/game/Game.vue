<script setup lang="ts">
import { useCargoStore } from '~/store/cargo'

const { cargos } = useCargoStore()
</script>

<template>
  <div>
    <Map />
    <!-- <template v-for="(cargo, i) in cargos" :key="i"> 这样写会说i没有被使用 -->
    <template v-for="cargo in cargos">
      <Cargo v-bind="cargo" />
    </template>
    <Player />
  </div>
</template>
