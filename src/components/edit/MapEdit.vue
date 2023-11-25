<script setup lang="ts">
import { MapTile } from '~/store/map'
import wallImg from '~/assets/wall.png'
import floorImg from '~/assets/floor.png'

const map = reactive([
  [2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2],
])

function handleClick(i: number, j: number) {
  map[i][j] = MapTile.WALL
}
</script>

<template>
  <!-- y -->
  <div v-for="(row, i) in map" :key="i" flex>
    <!-- x -->
    <div v-for="(col, j) in row" :key="j">
      <div border border-white @click="handleClick(i, j)">
        <template v-if="col === MapTile.WALL">
          <img :src="wallImg">
        </template>
        <template v-else-if="MapTile.FLOOR">
          <img :src="floorImg">
        </template>
      </div>
    </div>
  </div>
</template>
