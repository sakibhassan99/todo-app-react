import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

export default function TodoList({
  todos,
  setTodos,
  setError,
  setInput,
  setEditingId,
}) {
  const handleToggleChecked = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <ul className="space-y-3">
      {todos.map((todo) => {
        if (todo) {
          return (
            <li
              onClick={() => handleToggleChecked(todo.id)}
              key={todo.id}
              className={`${
                todo.checked ? "line-through" : ""
              } text-white select-none cursor-pointer flex px-4 justify-between items-center bg-[#8758ff] p-2 rounded`}
            >
              <div className="flex items-center gap-2">
                {todo.checked ? (
                  <MdOutlineRadioButtonChecked />
                ) : (
                  <MdOutlineRadioButtonUnchecked />
                )}
                {todo.input}
              </div>
              <div className="flex gap-4">
                <i
                  onClick={() => {
                    setEditingId(todo.id);
                    setInput(todo.input);
                  }}
                >
                  <FaEdit />
                </i>
                <i
                  onClick={() => {
                    setTodos((prevState) =>
                      prevState.filter((state) => state.id !== todo.id)
                    );
                  }}
                >
                  <FaTrashAlt />
                </i>
              </div>
            </li>
          );
        } else {
          setError(true);
        }
      })}
    </ul>
  );
}
