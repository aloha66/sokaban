<script setup lang="ts">
import { floorEditElement, wallEditElement } from '~/store/edit/editElement'
import { useMapEditStore } from '~/store/edit/mapEdit'

const { initMap, updateMapRow } = useMapEditStore()
// 补回响应式数据
const { row, col } = toRefs(useMapEditStore())

initMap()

watchEffect(() => {
  updateMapRow()
})
</script>

<template>
  <div>
    <h3>元素选择区</h3>
    <div m-2 space-y-2>
      <div>row: <input v-model="row" border border-blue-50></div>
      <div>row: <input v-model="col" border border-blue-50></div>
    </div>
    <div m-2 flex space-x-2>
      <h4>地图</h4>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
  </div>
</template>
