import { useState } from 'react'
import Start from './components/Start'
import Questions from './components/Questions'

function App () {
  const [questions, setQuestions] = useState([1])

  return (
    <div className="container">
    {
     questions.length === 0
       ? <Start/>
       : <Questions/>
    }

    </div>
  )
}

export default App
