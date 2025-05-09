import { useState } from "react";
import ToDoList from "./components/todo/ToDoList";
export default function AppToDo() {
  const [todos, Settodos] = useState(
    [
      {id:0, label:'scc'},
      {id:1, label:'next'},
    ]
  )

  return (
    <div>
      <h2>할일 목록</h2>
      <ToDoList todos={todos}/>
    </div>
  );
}

