<script setup lang="ts">
import { MapTile, useMapStore } from '~/store/map'
import wallImg from '~/assets/wall.png'
import floorImg from '~/assets/floor.png'

const { map } = useMapStore()
</script>

<template>
  <div v-for="(row, i) in map" :key="i" flex>
    <div v-for="(col, j) in row" :key="j">
      <template v-if="col === MapTile.WALL">
        <img :src="wallImg">
      </template>
      <template v-else-if="MapTile.FLOOR">
        <img :src="floorImg">
      </template>
    </div>
  </div>
</template>
