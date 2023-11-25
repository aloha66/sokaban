<script setup lang="ts">
import { useMapEditStore } from '~/store/edit/mapEdit';

const { map } = useMapEditStore()
</script>

<template>
  <!-- y -->
  <div v-for="(row, i) in map" :key="i" flex>
    <!-- x -->
    <div v-for="(col, j) in row" :key="j">
      <MapBlock :x="j" :y="i" :col="col"/>
    </div>
  </div>
</template>
