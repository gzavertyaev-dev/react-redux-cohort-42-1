import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"

import { CatFactSliceInitialState } from "./types"

const catFactInitialState: CatFactSliceInitialState = {
  data: [],
  error: undefined,
  isLoading: false,
}

export const catFactSlice = createAppSlice({
  name: "CAT_FACT",
  initialState: catFactInitialState,
  reducers: create => ({
    getCatFact: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        const CAT_FACT_API_URL: string = "https://catfact.ninja/fact"

        const response = await fetch(CAT_FACT_API_URL)

        const result = await response.json()

        if (response.ok) {
          // Эти данные пойдут в fullfilled
          return result
        } else {
          // Эти данные пойдут в rejected
          rejectWithValue(result)
        }
      },
      {
        pending: (state: CatFactSliceInitialState, action) => {
          // Стадия ожидания: тут выполняем действия во время ожидания ответа
          state.error = undefined
          state.isLoading = true
        },
        fulfilled: (state: CatFactSliceInitialState, action) => {
          // Стадия когда пришли ожидаемые данные(успешное окончание запроса): тут выполняем действия на кспешное окончания запроса(например: созранение пришедших данных)
          state.isLoading = false
          state.data = [...state.data, { id: v4(), fact: action.payload.fact }]
        },
        rejected: (state: CatFactSliceInitialState, action) => {
          // Стадия, когда пришла ошибка: тут обрабатываем ошибку
          state.isLoading = false
          state.error = "Some Network Error"
        },
      },
    ),
  }),
  selectors: {
    catFacts: (state: CatFactSliceInitialState) => state,
  },
})

export const catFactSliceActions = catFactSlice.actions

export const catFactSliceSelectors = catFactSlice.selectors
