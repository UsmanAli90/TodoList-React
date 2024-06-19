import style from "./TaskInput.module.css";

function TaskInput({ todoname, todoDate, onDeleteButton }) {
  return (
    <div className={`container text-center ${style.task}`}>
      <div class="row">
        <div class="col-4">{todoname}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button
            className="btn btn-danger"
            onClick={() => onDeleteButton(todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskInput;
