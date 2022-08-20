
import React, {useState, useEffect } from 'react';
import './App.css';
const API_URL = 'http://api.icndb.com/jokes/random'

function App() {
  const[joke, setJoke] = useState('')
  
  const generateJoke = ()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke))
  }
  useEffect(()=>{
    generateJoke()
  },[])
  return (
    <>
   <div className='top'><h1><i>laugh away ur sorrows</i></h1></div>
    <div className="App">
      <div className='card'>
      <h1 className='heading'>Razak jokes</h1>
        <p><span><h1>crack ur ribs!!!</h1></span></p>
        <p><h1>{joke}</h1></p>
        <button onClick={generateJoke}><h3>get new jokes</h3></button>
      </div>
    </div>
    </>
  );
}

export default App;
