import { useState } from "react";
import ToDoList from "./components/todo/ToDoList";
export default function AppToDo() {
  const [todotext,setTodotext] = useState("");
  const [todos, Settodos] = useState([
    { id: 0, label: "scc" },
    { id: 1, label: "next" },
  ]);

  const handleInputChange=(e)=>{
    setTodotext(e.target.value);
  }

  const handleClick = () => {
    const todosLength = todos.length;
    Settodos([ ...todos,
      {id: todosLength,
      label : todotext}
  ]);
  setTodotext(' ')
  };



  return (
    <div>
      <h2>할일 목록</h2>
      <input value={todotext} onChange={handleInputChange} type="text" ></input>
      <button onClick={handleClick}>추가</button>
      <ToDoList todos={todos} />
    </div>
  );
}
