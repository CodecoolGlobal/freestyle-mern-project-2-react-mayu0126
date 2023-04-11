import "./DailyWorkoutTable.css";

const DailyWorkoutTable = () => (

    <>
    <div className="dailyWorkoutTitle">DAILY WORKOUT PLANNER</div>
    <div className="date">{ new Date().toString().slice(4,15) }</div>

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

          <tr >
            <td>exercise.name</td>
            <td>exercise.id</td>
            <td>exercise.target</td>
            <td>exercise.equipment</td>
            <td>exercise.sets</td>
            <td>exercise.reps</td>
            <td>exercise.weight</td>
            <td>exercise.notes</td>
            <td>
                <button type="button">Update</button>

                <button type="button">Delete</button>
            </td>
          </tr>

      </tbody>
    </table>
  </div>
  </>
)

export default DailyWorkoutTable;