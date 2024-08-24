import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState("");
  return (
    <div className="w-full min-h-screen bg-[#8758ff] p-1">
      <div className="w-full max-w-[550px] bg-white mt-20 mx-auto p-8 rounded relative">
        <Todo
          setTodos={setTodos}
          input={input}
          setInput={setInput}
          setError={setError}
          error={error}
          editingId={editingId}
          setEditingId={setEditingId}
        />
        <TodoList
          setTodos={setTodos}
          setInput={setInput}
          todos={todos}
          setError={setError}
          setEditingId={setEditingId}
        />
      </div>
    </div>
  );
}

export default App;
