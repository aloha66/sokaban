<script setup lang="ts">
import { floorEditElement, wallEditElement } from '~/store/edit/editElement'
</script>

<template>
  <div>
    <h3>元素选择区</h3>
    <div m-2 flex space-x-2>
      <h4>地图</h4>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
  </div>
</template>
