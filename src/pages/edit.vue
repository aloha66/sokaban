<script setup lang="ts" generic="T extends any, O extends any">
import { useEditCargoStore } from '~/store/edit/editCargo'
import { useEditTargetStore } from '~/store/edit/editTarget'

defineOptions({
  name: 'Edit',
})

const { cargos } = useEditCargoStore()
const { targets } = useEditTargetStore()
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
        <template v-for="target in targets" :key="target.id">
          <EditTarget v-bind="target" />
        </template>
      </div>
      <div>
        <DataDisplayer />
      </div>
    </div>
    <div>
      <EditElementView />
    </div>
  </div>
</template>
