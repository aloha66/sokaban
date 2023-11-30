<script setup lang="ts" generic="T extends any, O extends any">
import { useEditCargoStore } from '~/store/edit/editCargo'

defineOptions({
  name: 'Edit',
})

const { cargos } = useEditCargoStore()
</script>

<template>
  <div>
    <div flex>
      <div w-2xl bg-pink>
        <MapEdit />
        <EditPlayer />
        <template v-for="cargo in cargos" :key="cargo.id">
          <EditCargo v-bind="cargo" />
        </template>
      </div>
      <div>数据展示区</div>
    </div>
    <div>
      <EditElementView />
    </div>
  </div>
</template>
