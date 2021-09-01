import './App.css';
import RandomNumber from './components/RandomNumbers';
import { useState } from "react"
function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const changeN = () =>{
      const randomN = Math.floor(Math.random() * 100) + 1
      return setNumber(randomN)
  }
  return (
    <div className="App">
      <header className="App-header">
        <RandomNumber n={number}></RandomNumber>
        <button onClick={changeN}>Clique</button>
      </header>
    </div>
  );
}

export default App;
