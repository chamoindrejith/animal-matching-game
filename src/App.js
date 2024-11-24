import { useState } from 'react';
import './App.css';
import Animal from './components/Animal';
import {animals} from './data/AnimalsDb';

function App() {
  const selectRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex].name;
  }

  const [randomAnimal, setRandomAnimal] = useState(selectRandomAnimal());
  return (
    <div className="container">
      <header className="border-orange">
        <h1>Animal Matching Game</h1>
      </header>
      <div className="border">
        <Animal randomAnimal={randomAnimal}
        setRandomAnimal={setRandomAnimal}
        animals ={animals}/>
      </div>
    </div>
  );
}

export default App;
