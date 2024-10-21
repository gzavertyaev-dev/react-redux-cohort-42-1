export interface CatFact {
  fact: string
  id: string
}

export interface CatFactSliceInitialState {
  data: CatFact[]
  error: undefined | string
  isLoading: boolean
}
