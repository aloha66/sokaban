<script setup lang="ts">
import { floorEditElement, playerEditElement, useEditElementStore, wallEditElement } from '~/store/edit/editElement'
import { useMapEditStore } from '~/store/edit/mapEdit'

const { initMap, updateMapRow, updateMapCol } = useMapEditStore()
// 补回响应式数据
const { row, col } = toRefs(useMapEditStore())

const { getCurrentSelectedEditElement } = useEditElementStore()

initMap()

watchEffect(() => {
  updateMapRow()
})

watchEffect(() => {
  updateMapCol()
})

const selectedEditElementName = computed(() => {
  if (!getCurrentSelectedEditElement())
    return '没有选择'
  return getCurrentSelectedEditElement()!.name
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
    <div m-2 flex space-x-2>
      当前选择：{{ selectedEditElementName }}
    </div>
  </div>
</template>
