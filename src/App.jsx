import Todoheading from "./components/Todoheading";
import TodoInput from "./components/TodoInput";
import TaskInputs from "./components/TaskInputs";
import WelcomeMessage from "./components/WelcomeMsg";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  function onAddButton(taskname, taskdate) {
    console.log(
      `Task name from App is ${taskname} and Task date from App is ${taskdate}`
    );
    const newTodoItem = [...todoItems, { name: taskname, date: taskdate }];
    setTodoItems(newTodoItem);
  }

  function onDeleteButton(taskname) {
    console.log(`Task to be deleted is ${taskname}`);
    const newTodoItem = todoItems.filter((item) => item.name !== taskname);
    setTodoItems(newTodoItem);
  }
  return (
    <>
      <center>
        <Todoheading></Todoheading>
        <TodoInput onAddButton={onAddButton}></TodoInput>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TaskInputs
          todoItems={todoItems}
          onDeleteButton={onDeleteButton}
        ></TaskInputs>
      </center>
    </>
  );
}

export default App;
