import './App.css';
import React, {useState} from "react"

function App() {
  const [min ,setMin] = useState()
  const [max ,setMax] = useState()
  const [random, setRandom] = useState()

  const changeMin = (e) => {
    setMin(Number(e.target.value))
  }

  const changeMax = (e) => {
    setMax(Number(e.target.value))
  }

  const generateRandom = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min))
  }
  
  return (
    <div className="App">
    <h1>Random Number</h1>
    <div className='container'>
      <p>Random Number: {random}</p>
      <input type="number" placeholder='Enter a min number' onChange={changeMin} />
      <input type="number" placeholder='Enter a min number' onChange={changeMax}/>
      <button onClick={generateRandom}>Give a Random Number</button>
    </div>
    </div>
  );
}

export default App;
