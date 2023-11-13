<script setup lang="ts" generic="T extends any, O extends any">
import { useMapStore } from '~/store/map';

defineOptions({
  name: 'IndexPage',
})


const {map} =  useMapStore()


</script>

<template>
  <div>
 {{ map }}
  </div>
</template>
