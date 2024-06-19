import { useState } from "react";

function TodoInput({ onAddButton }) {
  const [taskname, setTaskname] = useState();
  const [taskdate, setTaskDate] = useState();

  function onTaskNameChange(event) {
    setTaskname(event.target.value);
  }

  function onTaskDateChange(event) {
    setTaskDate(event.target.value);
  }

  function addButton() {
    onAddButton(taskname, taskdate);
    setTaskname("");
    setTaskDate("");
  }
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-4">
          <input type="text" onChange={onTaskNameChange} value={taskname} />
        </div>
        <div class="col-4">
          <input type="date" onChange={onTaskDateChange} value={taskdate} />
        </div>
        <div class="col-2">
          <button className="btn btn-success" onClick={addButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
