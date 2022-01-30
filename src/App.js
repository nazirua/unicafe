import React, {useState} from 'react';
// import './App.css';
      
const Statistics =(props) => {
  return(
  //  <h2>{props.statistics}</h2>
   <p>{props.text} {props.value}</p>

  )
}


const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>
  


function App() {
   // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const goodSet = () => setGood(good+1);
  const badSet = () => setBad(bad+1);
  const neutralSet = () => setNeutral(neutral+1);

  

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <Button 
       onClick={goodSet} text='Good' />
      <Button 
       onClick={neutralSet} text='Neutral' />
       <Button 
       onClick={badSet} text='Bad' />

      <h2><Statistics text='statistics' /></h2>
      <Statistics text='Good' value={good} />
      <Statistics text='Neutral' value={neutral} />
      <Statistics text='Bad' value={bad} />
      <Statistics text='All' value={good+bad+neutral} />
      <Statistics text='Average' value={(good-bad)/(good + bad + neutral)} />
      <Statistics text='Percentage' value={(good/(good + bad + neutral))*100} />


    </div>
  );
}

export default App;
