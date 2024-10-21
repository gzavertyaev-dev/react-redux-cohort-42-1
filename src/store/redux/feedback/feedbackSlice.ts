import { createAppSlice } from "store/createAppSlice"

import { FeedbackSliceInitialState } from "./types"

const feedbackInitialState: FeedbackSliceInitialState = {
  like: 0,
  dislike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackSliceInitialState) => {
      state.like = state.like + 1
    }),
    addDislike: create.reducer((state: FeedbackSliceInitialState) => {
      state.dislike = state.dislike + 1
    }),
    resetResults: create.reducer(() => feedbackInitialState),
    // resetResults: create.reducer((state: FeedbackSliceInitialState) => {
    //   state.like = 0
    //   state.dislike = 0
    // }),
  }),
  selectors: {
    like: (state: FeedbackSliceInitialState) => {
      return state.like
    },
    dislike: (state: FeedbackSliceInitialState) => {
      return state.dislike
    },
  },
})

export const feedbacklSliceSelectors = feedbackSlice.selectors

export const feedbackSliceActions = feedbackSlice.actions
