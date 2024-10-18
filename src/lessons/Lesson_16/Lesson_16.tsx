import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

import Counter from "components/Counter/Counter"

import { PageWrapper } from "./styles"

function Lesson_16() {
  // Вызов useAppDispatch создает функцию dispatch. Фнкция dispatch принимает в качестве аргумента action и доставляет его в store, чтобы вызвать определенный reducer
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)
  console.log(count)

  const onPlus = () => {
    // Тут будем диспатчить action для вызова редьюсера plus
    // counterSliceActions.plus() - это actionCreator. actionCreator создает actions
    // action - это обьект, который состоит из 2 св-в
    // 1 ключ обьекта action - payload. payload - это способ передачи данных из компонента в reducer
    // 2 ключ action - type(тип данных string). Это уникльное название action, название образуется из имени слайса и имени редьюсера, который по этому типу вызывается
    const action = counterSliceActions.plus()
    console.log(action)
    dispatch(action)
  }

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide(2))
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }

  return (
    <PageWrapper>
      <Counter
        count={count}
        onDivide={onDivide}
        onMultiply={onMultiply}
        onMinus={onMinus}
        onPlus={onPlus}
      />
    </PageWrapper>
  )
}

export default Lesson_16
