import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);
  return (
    <div className="w-full min-h-screen bg-[#8758ff] p-1">
      <div className="w-full max-w-[550px] bg-white mt-20 mx-auto p-8 rounded relative">
        <Todo setTodos={setTodos} setError={setError} error={error} />
        <TodoList todos={todos} setError={setError} />
      </div>
    </div>
  );
}

export default App;
