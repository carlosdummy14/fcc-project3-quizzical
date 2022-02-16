function Questions () {
  const dummy = true
  return (
    <div className="questions">
      <div className="question">
        <h3 className="question-text">How would one say goodbye in Spanish?</h3>
        <div className="options">
          <button className="option option-selected">Adios</button>
          <button className="option option-disable">Hola</button>
          <button className="option">Au Revoir</button>
          <button className="option">Salir</button>
        </div>
      </div>
      <div className="question">
        <h3 className="question-text">
          Which best selling toy of 1983 caused hysteria, resulting in riots
          breaking in stores?
        </h3>
        <div className="options">
          <button className="option option-wrong option-disable">
            Cabbage Patch Kids
          </button>
          <button className="option">Transformers</button>
          <button className="option option-correct">Care Bears</button>
          <button className="option">Rubik’s Cube</button>
        </div>
      </div>
      <div className="question">
        <h3 className="question-text">
          What is the hottest planet in our Solar System?
        </h3>
        <div className="options">
          <button className="option">Mercury</button>
          <button className="option option-disable">Venus</button>
          <button className="option">Mars</button>
          <button className="option">Saturn</button>
        </div>
      </div>
      <div className="question">
        <h3 className="question-text">
          In which country was the caesar salad invented?
        </h3>
        <div className="options">
          <button className="option option-selected">Italy</button>
          <button className="option option-wrong">Portugal</button>
          <button className="option option-correct">Mexico</button>
          <button className="option option-disable">France</button>
        </div>
      </div>
      <div className="question">
        <h3 className="question-text">How Many Hearts Does An Octopus Have?</h3>
        <div className="options">
          <button className="option">One</button>
          <button className="option">Two</button>
          <button className="option">Three</button>
          <button className="option">Four</button>
        </div>
      </div>
      <div className="footer">
        {dummy && <p className="footer-text">You scored 3/5 correct answers</p>}
        <button className="btn btn-medium">{dummy ? 'Play again' : 'Check answers'}</button>
      </div>
    </div>
  )
}
export default Questions
