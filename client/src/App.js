import './App.css';
import Exercises from './components/Exercises';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import ContentPagination from './components/ContentPagination';

function App() {
  /*const [exercises, setExercises] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ce547aae30msh24ff5c6780cf21cp124f08jsn23e36d9f3239',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises/target/abs', options)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setExercises(data)
      })
      .catch(err => console.error(err));
  }, []);*/

  function saveExercises(event) {
    event.preventDefault();
    
    // Adatbázis elérés próba:
    fetch('http://localhost:3001/api/exercise')
      .then(response => response.json())
      .then(data => console.error(data))
      .catch(error => console.error(error));

    //-----------------------------Ne uncommenteld hacsak nem akarsz még 1300 edzést az adatbázisba xd-----------//
    /*let bodypart;
    let equipment;
    let gifUrl;
    let id;
    let name;
    let target;

    exercises.map(exercise => {
      bodypart = exercise.bodypart;
      equipment = exercise.equipment;
      gifUrl = exercise.gifUrl;
      id = exercise.id;
      name = exercise.name;
      target = exercise.target;

      const data = { bodypart, equipment, gifUrl, id, name, target };
  
      fetch('http://localhost:3001/api/exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(response => { console.log(response)})
        .catch(error => { console.log(error) })
    })*/

  }


  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
