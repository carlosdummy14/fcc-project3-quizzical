function Question ({ question, handleOptionClick, gameover }) {
  const optionsToDraw = question.options.map((item) => {
    let optionClass = 'option'
    if (!gameover && item === question.selected) { optionClass += ' option-selected' }
    if (gameover) {
      if (item === question.selected && item === question.correct) {
        optionClass += ' option-correct'
      } else if (item === question.selected && item !== question.answare) {
        optionClass += ' option-wrong option-disable'
      } else {
        optionClass += ' option-disable'
      }
    }
    return gameover
      ? <button className={optionClass} key={item}> {item} </button>
      : <button className={optionClass} key={item} onClick={() => handleOptionClick(question.id, item)} > {item} </button>
  })

  return (
    <div className="question">
      <h3 className="question-text">{question.text}</h3>
      <div className="options">{optionsToDraw}</div>
    </div>
  )
}

export default Question
