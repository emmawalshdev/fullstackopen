import { useState } from 'react'

// BUTTON COMPONENT
const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text={'good'} handleClick={handleGoodClick}/>
      <Button text={'neutral'} handleClick={handleNeutralClick}/>
      <Button text={'bad'} handleClick={handleBadClick}/>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App