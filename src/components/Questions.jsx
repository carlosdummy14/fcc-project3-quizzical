import { useEffect, useState } from 'react'
import Question from './Question'
import { textSanitizer } from '../utils'

function Questions ({ playing }) {
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(-1)
  const gameover = score > -1

  const getData = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
    const data = await response.json()
    setQuestions(data.results.map((item, index) => {
      const newArray = [...item.incorrect_answers, item.correct_answer].sort().reverse().map(item => textSanitizer(item))
      return {
        id: index,
        text: textSanitizer(item.question),
        options: newArray,
        correct: textSanitizer(item.correct_answer),
        selected: ''
      }
    }))
  }

  useEffect(() => {
    getData().catch(console.error)
  }, [])

  const handleOptionClick = (id, option) => {
    const newArray = questions.map((question) => {
      if (question.id === id) {
        return {
          ...question,
          selected: option
        }
      }
      return question
    })
    setQuestions(newArray)
  }

  const handleCheckAnswares = () => {
    setScore(
      questions.filter((question) => question.selected === question.correct)
        .length
    )
  }

  const handlePlayAgain = () => {
    setScore(-1)
    playing(false)
    setQuestions([])
  }

  const questionsToDraw = questions.map((item) => {
    return (
      <Question
        key={item.id}
        question={item}
        handleOptionClick={handleOptionClick}
        gameover={gameover}
      />
    )
  })

  if (questions.length === 0) return <div className="questions"></div>
  return (
    <div className="questions">
    <div>
      {questionsToDraw}
    </div>
      <div className="footer">
        {gameover && (
          <p className="footer-text">You scored {score}/5 correct answers</p>
        )}
        <button
          className="btn btn-medium"
          onClick={score >= 0 ? handlePlayAgain : handleCheckAnswares}
        >
          {gameover ? 'Play again' : 'Check answers'}
        </button>
      </div>
    </div>
  )
}

export default Questions
