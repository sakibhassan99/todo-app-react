import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [editingId, setEditingId] = useState("");
  return (
    <div
      className={`${
        isDark ? "bg-[#2c3e50]" : "bg-[#8758ff]"
      } w-full min-h-screen p-1 flex justify-center items-center`}
    >
      <div
        className={`w-full max-w-[550px] ${
          isDark ? "bg-[#1a1a40] text-white" : "bg-white"
        } mx-auto p-8 rounded relative`}
      >
        <Todo
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
          setError={setError}
          error={error}
          editingId={editingId}
          setEditingId={setEditingId}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <TodoList
          setTodos={setTodos}
          setInput={setInput}
          todos={todos}
          setError={setError}
          setEditingId={setEditingId}
          isDark={isDark}
        />
      </div>
    </div>
  );
}

export default App;
