import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (!todoInput) return;
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };
  return (
    <div className="App">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter Todo..."
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </div>
    </div>
  );
}
