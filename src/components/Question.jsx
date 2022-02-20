function Question ({ question, handleOptionClick }) {
  const optionsToDraw = question.options.map((item) => {
    let optionClass = 'option'
    if (item === question.selected) optionClass += ' option-selected'
    return <button className={optionClass} key={item} onClick={() => handleOptionClick(question.id, item)}>{item}</button>
  })

  return (
    <div className="question">
        <h3 className="question-text">{question.text}</h3>
        <div className="options">
        {optionsToDraw}
        </div>
      </div>
  )
}

export default Question
