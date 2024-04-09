import React from "react";
import {useState, useEffect} from "react";
import './App.css';
function App() {

  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [hour, setHour] =useState(0)
  const [running, setRunning] = useState(false)

useEffect(() => {
    let id = null;
    if (running) {
      id = setInterval(() => {
        setSec((prevsec) => {
          if (prevsec === 59) {
            setMin((prevmin) => {
              if (prevmin === 59) {
                setHour((prevhour) => prevhour + 1)
                return 0;
              } else {
                return prevmin + 1
              }
            })
            return 0;
          } else {
            return prevsec + 1
          }
        })
      }, 1000)
    }


    return () => clearInterval(id)
  }, [running])

  const handleStart = () => {
    setRunning(true)
  }
  const handleStop = () => {
    setRunning(false)
  }
  const handleReset = () => {
    setHour(0)
    setSec(0)
    setMin(0)
  }

  return (
    <div className="app">
      <h1>StopWatch</h1>
            <p>{hour<10? "0"+hour: hour}:{min<10? "0"+min :min}:{sec<10? "0"+sec: sec}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
  }
 export default App;