import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  catFactSliceActions,
  catFactSliceSelectors,
} from "store/redux/catFact/catFactSlice"
import { CatFact } from "store/redux/catFact/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  CatFactCard,
  CatFactText,
  CatFactsContainer,
  ButtonControl,
} from "./styles"

function Lesson_17() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    catFactSliceSelectors.catFacts,
  )

  const getCatFact = () => {
    // dispatch экшена, который сделает API запрос
    dispatch(catFactSliceActions.getCatFact())
  }

  const catFacts = data.map((catFact: CatFact) => {
    return <CatFactText key={catFact.id}>{catFact.fact}</CatFactText>
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <CatFactCard>
        <CatFactsContainer>{data.length > 0 && catFacts}</CatFactsContainer>
        <Button disabled={isLoading} name="Get Cat Fact" onClick={getCatFact} />
      </CatFactCard>
    </PageWrapper>
  )
}

export default Lesson_17
