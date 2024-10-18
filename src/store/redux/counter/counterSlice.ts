import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { CounterSliceInitialState } from "./types"

// Прописываем значения по умолчанию для count, чтобы затем передать в Global state в redux store
const counterInitialState: CounterSliceInitialState = {
  count: 0,
}

// Создаем slice
export const counterSlice = createAppSlice({
  // name - это имя для slice, имя используется для нахождения событий слайса в redux devtools и для идентификации actions
  name: "COUNTER",
  initialState: counterInitialState,
  // Более длинный синтаксис написания через return, далее снизу указан сокращенный синтаксис того же самого return
  // reducers: (create) => {
  //     return {}
  // },
  // reducers - функции изменяющие состояния counterSlice
  reducers: create => ({
    plus: create.reducer((state: CounterSliceInitialState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceInitialState) => {
      state.count = state.count - 1
    }),
    multiply: create.reducer(
      (state: CounterSliceInitialState, action: PayloadAction<number>) => {
        console.log(action)
        state.count = Number((state.count * action.payload).toFixed(2))
      },
    ),
    divide: create.reducer(
      (state: CounterSliceInitialState, action: PayloadAction<number>) => {
        state.count = Number((state.count / action.payload).toFixed(2))
      },
    ),
  }),
  selectors: {
    count: (state: CounterSliceInitialState) => {
      return state.count
    },
  },
})

// Получаем в counterSliceActions все actions из counter slice.actions
export const counterSliceActions = counterSlice.actions

// Получаем в counterSliceSelectors все селекторы с помощью counterSlice.selectors
export const counterSliceSelectors = counterSlice.selectors
