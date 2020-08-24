import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

// Function StatisticLine that returns rows to the Statistics function 
// table based on props received.
const StatisticLine = (props) => {
  return (
      <tr>
        <th style={{width: '60px', textAlign:'left'}}>{props.text}</th>
        <th style={{textAlign:"left"}}>{props.value}</th>
      </tr>
  )
}
  
// Function that displays statistics
// Gets props from App and sends props to StatisticLine function
const Statistics = (props) => {
  if (props.allReviews <= 0) {
    return (
        <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={props.valueGood} />
        <StatisticLine text='Neutral' value={props.valueNeutral} />
        <StatisticLine text='Bad' value={props.valueBad} />
        <StatisticLine text='All' value={props.valueAll} />
        <StatisticLine text='Average' value={(props.valueAvg).toFixed(1)} />
        <StatisticLine text='Positive' value={(props.valuePos).toFixed(1) + ' %'} />
      </tbody>
    </table>
  )
}

// Button function
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// Main function App
const App = () => {

  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })
  const [allReviews, setAllReviews] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodReview = () => {
    setReviews({ ...reviews, good: reviews.good + 1 })
    setAllReviews(allReviews + 1)
    setAverage(average + 1)
  }

  const handleNeutralReview = () => {
    setReviews({ ...reviews, neutral: reviews.neutral + 1 })
    setAllReviews(allReviews + 1)
  }

  const handleBadReview = () => {
    setReviews({ ...reviews, bad: reviews.bad + 1 })
    setAllReviews(allReviews + 1)
    setAverage(average - 1)
    
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodReview} text='good' />
      <Button onClick={handleNeutralReview} text='neutral' />
      <Button onClick={handleBadReview} text='bad' />
      <h1>Statistics</h1>
      <Statistics
        allReviews={allReviews}
        valueGood={reviews.good}
        valueNeutral={reviews.neutral}
        valueBad={reviews.bad}
        valueAll={allReviews}
        valueAvg={average / allReviews}
        valuePos={(reviews.good * 100 / allReviews)}
        />
    </div>
  )
}

// ReactDOM rendering
ReactDOM.render(
  <App />,
  document.getElementById('root')
);