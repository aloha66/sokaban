<script setup lang="ts">
import wallImg from '~/assets/wall.png'
import floorImg from '~/assets/floor.png'
import type { EditElement } from '~/store/edit/editElement'
import { floorEditElement, useEditElementStore, wallEditElement } from '~/store/edit/editElement'

const { setCurrentSelectedEditElement } = useEditElementStore()

function handleClick(editElement: EditElement) {
  setCurrentSelectedEditElement(editElement)
}
</script>

<template>
  <div>
    <h3>元素选择区</h3>
    <div m-2 flex space-x-2>
      <h4>地图</h4>
      <div @click="handleClick(wallEditElement)">
        <img :src="wallImg">
      </div>
      <div @click="handleClick(floorEditElement)">
        <img :src="floorImg">
      </div>
    </div>
  </div>
</template>
