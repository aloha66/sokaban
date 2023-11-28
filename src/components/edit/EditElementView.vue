<script setup lang="ts">
import { floorEditElement, playerEditElement, wallEditElement } from '~/store/edit/editElement'
import { useMapEditStore } from '~/store/edit/mapEdit'

const { initMap, updateMapRow, updateMapCol } = useMapEditStore()
// 补回响应式数据
const { row, col } = toRefs(useMapEditStore())

initMap()

watchEffect(() => {
  updateMapRow()
})

watchEffect(() => {
  updateMapCol()
})
</script>

<template>
  <div>
    <h3>元素选择区</h3>
    <div m-2 space-y-2>
      <div>row: <input v-model="row" border border-blue-50></div>
      <div>col: <input v-model="col" border border-blue-50></div>
    </div>
    <div m-2 flex space-x-2>
      <h4>地图：</h4>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
    <div m-2 flex space-x-2>
      <h4>玩家：</h4>
      <EditElement :edit-element="playerEditElement" />
    </div>
  </div>
</template>
