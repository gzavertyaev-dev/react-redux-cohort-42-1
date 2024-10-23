export interface RandomJoke {
  id: string
  // joke - совмещенная строка из 2 св-в punchline + setup
  joke: string
}

export interface RandomJokeSliceState {
  jokes: RandomJoke[]
  error: string | undefined
  isFetching: boolean
}
