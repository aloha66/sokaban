<script setup lang="ts">
import { floorEditElement, wallEditElement } from '~/store/edit/editElement'
import { useMapEditStore } from '~/store/edit/mapEdit';

const {row,col,initMap} = useMapEditStore()

initMap()
</script>

<template>
  <div>
    <h3>元素选择区</h3>
    <div m-2 space-y-2>
      <div>row: <input border border-blue-50 v-model="row"></div>
      <div>row: <input border border-blue-50 v-model="col"></div>
    </div>
    <div m-2 flex space-x-2>
      <h4>地图</h4>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
  </div>
</template>
