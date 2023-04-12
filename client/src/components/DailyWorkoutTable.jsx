import "./DailyWorkoutTable.css";

const DailyWorkoutTable = ({dailyexercises}) => (

    <>
    <div className="titleAndDate">
      <div className="dailyWorkoutTitle">DAILY WORKOUT PLANNER</div>
      <div className="date">{ new Date().toString().slice(4,15) }</div>
    </div>
    

    <div className="DailyWorkoutTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Id</th>
          <th>Target</th>
          <th>Equipment</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {dailyexercises&&dailyexercises.map(exercise => (
          <tr key={exercise.id}>
            <td>{exercise.name}</td>
            <td>{exercise.id}</td>
            <td>{exercise.target}</td>
            <td>{exercise.equipment}</td>
            <td><input className="sets" defaultValue={exercise.sets}/></td>
            <td><input className="reps" defaultValue={exercise.reps}/></td>
            <td><input className="weight" defaultValue={exercise.weight}/></td>
            <td><input className="notes" defaultValue={exercise.notes}/></td>
            <td>
                <button type="button" >Update</button>

                <button type="button">Delete</button>
            </td>
          </tr>
        ))
        }
      </tbody>
    </table>
  </div>
  </>
)

export default DailyWorkoutTable;