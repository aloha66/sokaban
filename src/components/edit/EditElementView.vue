<script setup lang="ts">
import wallImg from '~/assets/wall.png'
import floorImg from '~/assets/floor.png'
import { useMapEditStore } from '~/store/edit/mapEdit'

const { setCurrentSelectedEditElement } = useMapEditStore()

function handleClick(name: 'wall' | 'floor') {
  setCurrentSelectedEditElement({ name })
}
</script>

<template>
  <div>
    <h3>元素选择区</h3>
    <div m-2 flex space-x-2>
      <h4>地图</h4>
      <div @click="handleClick('wall')">
        <img :src="wallImg">
      </div>
      <div @click="handleClick('floor')">
        <img :src="floorImg">
      </div>
    </div>
  </div>
</template>
