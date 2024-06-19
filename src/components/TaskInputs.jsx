import TaskInput from "./TaskInput";

function TaskInputs({ todoItems, onDeleteButton }) {
  return (
    <div>
      {todoItems.map((items) => (
        <TaskInput
          todoname={items.name}
          todoDate={items.date}
          onDeleteButton={onDeleteButton}
        ></TaskInput>
      ))}
    </div>
  );
}

export default TaskInputs;
