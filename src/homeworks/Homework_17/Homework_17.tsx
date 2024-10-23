import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokesActions,
  randomJokesSelectors,
} from "store/redux/randomJoke/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJoke/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  JokeCard,
  RandomJokeContainer,
  JokeText,
  JokeWrapper,
  ButtonControl,
} from "./styles"

function Homework_17() {
  const dispatch = useAppDispatch()
  const { jokes, error, isFetching } = useAppSelector(
    randomJokesSelectors.jokesData,
  )

  const getRandomJoke = () => {
    dispatch(randomJokesActions.getRandomJoke("Data from component"))
  }

  const deleteAllJokes = () => {
    dispatch(randomJokesActions.deleteAllJokes())
  }

  const randomJokes = jokes.map((joke: RandomJoke) => {
    const deleteJoke = () => {
      dispatch(randomJokesActions.deleteJoke(joke.id))
    }

    return (
      <JokeWrapper key={joke.id}>
        <JokeText>{joke.joke}</JokeText>
        <ButtonControl>
          <Button name="Delete" onClick={deleteJoke} isDeleteVariant />
        </ButtonControl>
      </JokeWrapper>
    )
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <JokeCard>
        {jokes.length > 0 && (
          <Button
            name="Delete all jokes"
            onClick={deleteAllJokes}
            isDeleteVariant
          />
        )}
        <RandomJokeContainer>{randomJokes}</RandomJokeContainer>
        <Button
          disabled={isFetching}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </JokeCard>
    </PageWrapper>
  )
}

export default Homework_17
