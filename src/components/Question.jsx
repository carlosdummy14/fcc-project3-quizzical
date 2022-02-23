function Question ({ question, handleOptionClick, gameover }) {
  const optionsToDraw = question.options.map((item) => {
    let optionClass = 'option'
    if (!gameover && item === question.selected) { optionClass += ' option-selected' }
    if (gameover) {
      if (item === question.correct) {
        optionClass += ' option-correct'
      } else if (item === question.selected && item !== question.answare) {
        optionClass += ' option-wrong option-disable'
      } else {
        optionClass += ' option-disable'
      }
    }

    const title = item
    const itemText = item.length > 20 ? item.substr(0, 20) + '...' : item

    return gameover
      ? <button className={optionClass} key={item} title={title}> {itemText} </button>
      : <button className={optionClass} key={item} title={title} onClick={() => handleOptionClick(question.id, item)} > {itemText} </button>
  })

  const styleText = question.text.length > 60 ? { fontSize: '0.8rem' } : {}
  return (
    <div className="question">
      <h3 className="question-text" style={ styleText }>{question.text}</h3>
      <div className="options">{optionsToDraw}</div>
    </div>
  )
}

export default Question
