import { defineStore } from "pinia";

export interface EditCargo {
  x:number
  y:number
  id:number
}

export const useEditCargoStore = defineStore('edit-cargo',() => {
  const cargos = reactive<EditCargo[]>([{x:2,y:2,id:1},{x:3,y:3,id:2}])

  return {cargos}
})
