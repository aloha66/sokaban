<script setup lang="ts">
import targetImg from '~/assets/target.png'
import { useEditTargetStore } from '~/store/edit/editTarget'
import type { Target } from '~/store/target'

const props = defineProps<Target>()

const { position } = usePosition(props, STEP_EDIT)

const { removeTarget } = useEditTargetStore()

function handleDblclick() {
  removeTarget(props)
}
</script>

<template>
  <div absolute left-0 top-0 :style="`transform: translate3d(${position.left},${position.top},0);`" @dblclick="handleDblclick">
    <img :src="targetImg">
  </div>
</template>
