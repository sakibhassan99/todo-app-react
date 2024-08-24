import { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { MdDarkMode } from "react-icons/md";

export default function Todo({ setTodos, error, setError }) {
  const [input, setInput] = useState("");
  function handleOnAdd() {
    if (input) {
      setTodos((prevState) => [...prevState, input]);
      setInput("");
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div className="absolute text-xl cursor-pointer top-4 right-5">
        <MdDarkMode />
      </div>
      <h1 className="flex items-center gap-2 mb-8 text-3xl font-medium center">
        To-Do List <FcTodoList />
      </h1>
      <div className="relative flex w-full mb-10">
        <input
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          value={input}
          placeholder="Enter Text Here!"
          autoFocus
          type="text"
          className="flex-1 w-full p-3 outline-none text-slate-950 bg-[#edeef9]"
        />
        <button
          className="bg-[#8758ff] text-white px-4 rounded"
          onClick={handleOnAdd}
        >
          Add Todo
        </button>
        <p
          className={`${
            error ? "" : "hidden"
          } absolute text-sm text-red-700 top-full`}
        >
          Please Enter Something To Add
        </p>
      </div>
    </>
  );
}
