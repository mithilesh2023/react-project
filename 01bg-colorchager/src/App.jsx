
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState()
  return (
    <div className='bgcolor' style={{ backgroundColor: color }}>
      <div className="colorchanger">
        <button style={{backgroundColor:'red'}} onClick={() => setColor("red")} >Red</button>
        <button style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>blue</button>
        <button style={{backgroundColor:"black",color:"white"}} onClick={() => setColor("black")}>black</button>
        <button style={{backgroundColor:"orange"}} onClick={() => setColor("orange")}>orange</button>
        <button style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>yellow</button>
        <button style={{backgroundColor:"pink"}} onClick={() => setColor("pink")}>Pink</button>
        <button style={{backgroundColor:"violet"}} onClick={() => setColor("violet")}>violet</button>
        <button style={{backgroundColor:"tan"}} onClick={() => setColor("tan")}>tan</button>
        <button style={{backgroundColor:"tomato"}} onClick={() => setColor("tomato")}>tomato</button>
        <button style={{backgroundColor:""}} onClick={() => setColor("")}>Clear</button>
      </div>
    </div>
  )
}

export default App
