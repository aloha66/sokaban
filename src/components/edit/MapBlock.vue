<script setup lang="ts">
import { MapTile } from '~/store/map'
import wallImg from '~/assets/wall.png'
import floorImg from '~/assets/floor.png'
import { useEditElementStore } from '~/store/edit/editElement'

interface Props {
  x: number
  y: number
  col: MapTile
}

const props = defineProps<Props>()

const { getCurrentSelectedEditElement } = useEditElementStore()

const { isDragging, startDrag, stopDrag } = useDrag()

function handleClick() {
  getCurrentSelectedEditElement().execute(props)
}

function handleMouseUp() {
  stopDrag()
  window.removeEventListener('mouseup', handleMouseUp)
}

function handleMouseDown() {
  startDrag()
  window.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove() {
  if (!isDragging())
    return
  getCurrentSelectedEditElement()?.execute(props)
}
</script>

<template>
  <div border border-white @click="handleClick" @mousedown="handleMouseDown" @mousemove="handleMouseMove">
    <template v-if="props.col === MapTile.WALL">
      <img :src="wallImg" :draggable="false">
    </template>
    <template v-else-if="MapTile.FLOOR">
      <img :src="floorImg" :draggable="false">
    </template>
  </div>
</template>
