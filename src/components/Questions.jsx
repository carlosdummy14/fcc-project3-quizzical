import { useEffect, useState } from 'react'
import Question from './Question'

const data = [
  {
    id: 1,
    text: 'How would one say goodbye in Spanish?',
    options: ['Adios', 'Hola', 'Au Revoir', 'Salir'],
    correct: 'Adios'
  },
  {
    id: 2,
    text: 'Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?',
    options: [
      'Cabbage Patch Kids',
      'Transformers',
      'Care Bears',
      'Rubik’s Cube'
    ],
    correct: 'Rubik’s Cube'
  },
  {
    id: 3,
    text: 'What is the hottest planet in our Solar System?',
    options: ['Mercury', 'Venus', 'Mars', 'Saturn'],
    correct: 'Mercury'
  },
  {
    id: 4,
    text: 'In which country was the caesar salad invented?',
    options: ['Italy', 'Portugal', 'Mexico', 'France'],
    correct: 'Italy'
  },
  {
    id: 5,
    text: 'How Many Hearts Does An Octopus Have?',
    options: ['One', 'Two', 'Three', 'Four'],
    correct: 'Three'
  }
]

function Questions ({ playing }) {
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(-1)
  const gameover = score > -1

  const setData = () => {
    return data.map((item) => {
      return {
        ...item,
        selected: ''
      }
    })
  }

  useEffect(() => {
    setQuestions(setData())
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
    // delete questions array
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
      {questionsToDraw}
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
