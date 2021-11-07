import React,{useState} from "react"
import './styles.css';

function App() {
  const[minVal,setMinVal]=useState(0)
  const[maxVal,setMaxVal]=useState(10)
  const[randomNum,setRandomNum]=useState(
    Math.floor(Math.random()*(maxVal-minVal+1)+minVal)

  )

  const handleRandomNum = () =>{
    setRandomNum(Math.floor(Math.random()*(maxVal-minVal+1)+minVal))

  }

  return (
    <div className="hero">
      <h2 className="hd">
        Random Number Generator
      </h2>
      <div className="container">
        <div className="randomNum">
          <p>
            Random number <span>{randomNum}</span>
            
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={minVal} onChange={
              (event)=>{
                setMinVal(+event.target.value)
              }

            }/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxVal} onChange={
              (event)=>{
                setMinVal(+event.target.value)
              }

            }/>
          </div>
        </div>
        <button onClick={handleRandomNum}>Get a random number</button>
      </div>
    </div>
  );
}

export default App;
