import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

export default function TodoList({ todos, setError }) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => {
        if (todo) {
          return (
            <li
              key={crypto.randomUUID()}
              className="text-white select-none cursor-pointer flex px-4 justify-between items-center bg-[#8758ff] p-2 rounded"
            >
              <div className="flex items-center gap-2">
                <MdOutlineRadioButtonUnchecked />
                {todo}
              </div>
              <div className="flex gap-4">
                <FaEdit />
                <FaTrashAlt />
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
