function Start ({ playing }) {
  return (
    <div className="start">
      <h1 className="title">Quizzical</h1>
      <p className="text">Show me how much you know about anything.</p>
      <button className="btn btn-big" onClick={() => playing(true)}>Start quiz</button>
    </div>
  )
}

export default Start
