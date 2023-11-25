<script setup lang="ts">
import { MapTile } from '~/store/map'
import wallImg from '~/assets/wall.png'
import floorImg from '~/assets/floor.png'
import { useMapEditStore } from '~/store/edit/mapEdit'

interface Props {
  x: number
  y: number
  col: MapTile
}

const props = defineProps<Props>()

const { map } = useMapEditStore()

function handleClick() {
  map[props.y][props.x] = MapTile.WALL
}
</script>

<template>
  <div border border-white @click="handleClick">
    <template v-if="props.col === MapTile.WALL">
      <img :src="wallImg">
    </template>
    <template v-else-if="MapTile.FLOOR">
      <img :src="floorImg">
    </template>
  </div>
</template>
