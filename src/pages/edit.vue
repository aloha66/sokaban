<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'Edit',
})
</script>

<template>
  <div>
    <div flex>
      <div w-2xl bg-pink>
        <MapEdit />
        <EditPlayer/>
      </div>
      <div>数据展示区</div>
    </div>
    <div>
      <EditElementView/>
    </div>
  </div>
</template>
