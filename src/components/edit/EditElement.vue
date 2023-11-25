<script setup lang="ts">
import type { EditElement } from '~/store/edit/editElement'
import { useEditElementStore } from '~/store/edit/editElement'

interface Props {
  editElement: EditElement
}

const props = defineProps<Props>()

const { setCurrentSelectedEditElement } = useEditElementStore()

function handleClick() {
  setCurrentSelectedEditElement(props.editElement)
}
</script>

<template>
  <div @click="handleClick">
    <img :src="props.editElement.img">
  </div>
</template>
