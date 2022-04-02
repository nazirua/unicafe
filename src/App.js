import React, {useState} from 'react'
      
// statistics component
const Statistics =(props) => {
  const { good, neutral, bad, all, average, percentage } = props;

  if (all < 1) return <div>No feedback given</div>;

  return (
    <>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='percentage' value={percentage} />
    </>
  );
}
// Button component
const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>
  
const StatisticLine = ({text, value}) =>{
  return(
    <>
      <div>{text} {value}</div>

    </>
  )
}


function App() {
   // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const goodSet = () => setGood(good+1);
  const badSet = () => setBad(bad+1);
  const neutralSet = () => setNeutral(neutral+1);

  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all || 0;
  const percentage = `${(good / all) * 100 || 0} %`;

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <Button 
       onClick={goodSet} text='Good' />
      <Button 
       onClick={neutralSet} text='Neutral' />
       <Button 
       onClick={badSet} text='Bad' />

      <h2>statistics</h2>


      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={average}
        percentage={percentage}
      />
    </div>
  );
}

export default App;