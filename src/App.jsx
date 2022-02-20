import { useState } from 'react'
import Start from './components/Start'
import Questions from './components/Questions'

function App () {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="container">
    {
     !playing
       ? <Start playing={setPlaying}/>
       : <Questions playing={setPlaying}/>
    }

    </div>
  )
}

export default App
