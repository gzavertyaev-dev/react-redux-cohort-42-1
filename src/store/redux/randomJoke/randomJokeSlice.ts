import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"

import { RandomJoke, RandomJokeSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const randomJokeInitialState: RandomJokeSliceState = {
  jokes: [],
  error: undefined,
  isFetching: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJoke: create.asyncThunk(
      async (data: any, { rejectWithValue }) => {
        console.log(data)
        const RANDOM_JOKE_URL =
          "https://official-joke-api.appspot.com/random_joke"

        const response = await fetch(RANDOM_JOKE_URL)

        const result = await response.json()

        if (response.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: (state: RandomJokeSliceState) => {
          state.error = undefined
          state.isFetching = true
        },
        fulfilled: (state: RandomJokeSliceState, action) => {
          state.isFetching = false
          state.jokes = [
            ...state.jokes,
            {
              id: v4(),
              joke: `${action.payload.setup} ${action.payload.punchline}`,
            },
          ]
        },
        rejected: (state: RandomJokeSliceState, action) => {
          state.isFetching = false
          // state.error = action.error.message
          state.error = "Some Network Error"
        },
      },
    ),
    deleteJoke: create.reducer(
      (state: RandomJokeSliceState, action: PayloadAction<string>) => {
        state.jokes = [...state.jokes].filter(
          (joke: RandomJoke) => joke.id !== action.payload,
        )
      },
    ),
    deleteAllJokes: create.reducer(() => randomJokeInitialState),
  }),
  selectors: {
    jokesData: (state: RandomJokeSliceState) => state,
  },
})

export const randomJokesActions = randomJokeSlice.actions

export const randomJokesSelectors = randomJokeSlice.selectors
