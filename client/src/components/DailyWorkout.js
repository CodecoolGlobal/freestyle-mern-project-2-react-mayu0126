import DailyWorkoutTable from "./DailyWorkoutTable";
import { useState, useEffect } from "react";


/*
const fetchDailyExercises = () => {
    console.log("lefut a get fetch")
    return fetch("/api/dailyexercises").then((res) => res.json()).catch((err)=>console.log(err));
};
*/


const DailyWorkout = () => {

    //ez felel a működésért
    //a returnben visszatér a DailyWorkoutTable-lel, átadva a propsokat
    
    const [dailyexercises, setDailyexercises] = useState(null)

    console.log(dailyexercises)
    
    useEffect(() => {
        console.log("ez a useEffect")

        fetch("http://localhost:3001/api/dailyexercises")
            .then(res => res.json())
            .then((dailyexercises) => {
                setDailyexercises(dailyexercises)
                console.log(dailyexercises)
            })
    }, []);
    

    return (
        <DailyWorkoutTable
            dailyexercises={dailyexercises}
    />
    )
}

export default DailyWorkout;

//a főoldalon lesz egy Add to daily workout gomb
//ekkor hozzáadja a mongoDB "dailyworkouts" collection-höz az objektumot
//ez a DailyWorkout fetcheli le az objektumokat + szerver!
//state-be mentjük a fetchelt adatokat, és a táblázatba átadjuk props-ként