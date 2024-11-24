import { useState } from "react";
import "./App.css";
import Animal from "./components/Animal";
import AnimalsTable from "./components/AnimalsTable";
import Result from "./components/Result";
import { animals } from "./data/AnimalsDb";

function App() {
  const selectRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex].name;
  };

  const [randomAnimal, setRandomAnimal] = useState(selectRandomAnimal());
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [result, setResult] = useState("");

  const checkResult = (selectedAnimal) => {
    if (selectedAnimal === randomAnimal) {
      setResult("Win!");

      setTimeout(() => {
        setResult("");
        setRandomAnimal(selectRandomAnimal());
      }, 5000);
    } else {
      setResult("Lose!");
    }
  };
  return (
    <div className="container">
      <header className="border-orange">
        <h1>Animal Matching Game</h1>
      </header>

      <div className="board">
        <Animal
          randomAnimal={randomAnimal}
          setRandomAnimal={setRandomAnimal}
          animals={animals}
        />

        <Result result={result} />
        <AnimalsTable
          animals={animals}
          checkResult={checkResult}
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
        />
      </div>
    </div>
  );
}

export default App;
