import { useState } from "react";
import DogImage from "./components/DogsImage";
import { getAllDogs, getImage } from "./API/Dogs";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState();
  function handler() {
    getAllDogs()
      .then((res) => res.json())
      .then((res) => {
        setDogs(res.message);
      });
  }
  function handler() {
    getImage()
      .then((res) => res.json())
      .then((res) => {
        setDogs(res.message);
        console.log(res);
      });
  }
  return (
    <div>
      <header>
        <h1>Dogg Select</h1>
      </header>
      <label for="breeds">Select a Breed Before </label>
      <button onClick={handler}>click me</button>
      <select name="dogs">
        {dogs &&
          Object.keys(dogs).map((dogName, index) => {
            return <option index={index}>{dogName}</option>;
          })}
      </select>
      <DogImage />
    </div>
  );
}

export default App;
