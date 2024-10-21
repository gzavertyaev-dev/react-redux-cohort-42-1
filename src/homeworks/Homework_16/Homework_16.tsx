import { useAppDispatch, useAppSelector } from "store/hooks"
import Feedback from "components/Feedback/Feedback"
import {
  feedbackSliceActions,
  feedbacklSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import { PageWrapper } from "./styles"

function Homework_16() {
  const dispatch = useAppDispatch()
  const like = useAppSelector(feedbacklSliceSelectors.like)
  const dislike = useAppSelector(feedbacklSliceSelectors.dislike)

  const onLike = () => {
    // console.log(feedbackSliceActions.addLike())
    // {
    // payload: undefined ,
    // type: "FEEDBACK/addLike"
    // }
    dispatch(feedbackSliceActions.addLike())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }
  return (
    <PageWrapper>
      <Feedback
        likes={like}
        dislikes={dislike}
        onDislike={onDislike}
        onLike={onLike}
        resetResults={resetResults}
      />
    </PageWrapper>
  )
}

export default Homework_16
