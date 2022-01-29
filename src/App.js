import React, {useState} from 'react';
// import './App.css';


const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>
  


function App() {
   // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const goodSet = () => setGood(good+1);
  const badSet = () => setBad(bad+1);
  const neutralSet = () => setNeutral(neutral+1);

  console.log({good})


  return (
    <div className="App">
      <h1>Give feedback</h1>
      <Button 
       onClick={goodSet} text='Good' />
      <Button 
       onClick={neutralSet} text='Neutral' />
       <Button 
       onClick={badSet} text='Bad' />

       <h2>Statistics:</h2>

       <div><p>Good {good} </p></div>
       <div><p>Neutral {neutral} </p></div>
       <div><p>Bad {bad} </p></div>

    </div>
  );
}

export default App;
