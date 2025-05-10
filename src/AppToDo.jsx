import { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";
import todoReducer from "./reducer/todoReducer";

function AppTodo(props) {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);
  const [todoText, setTodoText] = useState("");
  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  //added
  const handleAddTodo = (e) => {
    dispatch({
      value: "added",
      nextId: todos.length,
      todoText,
    });
    setTodoText(""); // null, undefined [X]
  };

  //added-index
  const handleAddTodoByIndex = () => {
    dispatch({
      value: "added-index",
      nextId: todos.length,
      todoText,
      insertAt,
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  //deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({
      deleteId,
    });
  };

  //done
  const handleToggleTodo = (id, done) => {
    dispatch({
      id: id,
      done: done,
    });
  };

  // const handleToggleCopyTodo = (id, done) => {
  //   const nextTodos = [...copyTodos];
  //   const targetItem = nextTodos.find(item => item.id === id);
  //   targetItem.done = done;
  //   setCopyTodos(nextTodos);
  // }

  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleTodoTextChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((_, index) => (
            <option value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
      </div>
      <div>Preview: {todoText}</div>

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
