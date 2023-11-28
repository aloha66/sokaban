export interface Position {
  x: number
  y: number
}

export const STEP_GAME = 32
export const STEP_EDIT = 34

export function usePosition(pos: Position, step = STEP_GAME) {
  const position = computed(() => ({
    left: `${pos.x * step}px`,
    top: `${pos.y * step}px`,

  }))

  return { position }
}
