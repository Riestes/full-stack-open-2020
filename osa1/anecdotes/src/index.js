import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  let array = new Uint8Array(props.anecdotes.length); 
  const [votes, setVotes] = useState(array)

  const copy = [...votes]

  console.log(votes)

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }

  const handleVoteClick = () => {
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVoted = () => copy.indexOf(Math.max(...copy))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h4>{props.anecdotes[selected]}</h4>
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextClick}>Next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <h4>{props.anecdotes[mostVoted()]}</h4>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)