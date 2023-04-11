import DailyWorkoutTable from "./DailyWorkoutTable";

const DailyWorkout = ({showDailyWorkout}) => {

    //ez felel a működésért
    //a returnben visszatér a DailyWorkoutTable-lel, átadva a propsokat
    

    return (
    <DailyWorkoutTable
        
    />
    )
}

export default DailyWorkout;

//a főoldalon lesz egy Add to daily workout gomb
//ekkor hozzáadja a mongoDB "dailyworkouts" collection-höz az objektumot
//ez a DailyWorkout fetcheli le az objektumokat + szerver!
//state-be mentjük a fetchelt adatokat, és a táblázatba átadjuk props-ként