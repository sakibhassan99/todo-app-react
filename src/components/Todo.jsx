import { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Todo({
  setTodos,
  error,
  setError,
  input,
  setInput,
  editingId,
  setEditingId,
  todos,
  isDark,
  setIsDark,
}) {
  function handleOnAdd() {
    if (editingId) {
      setTodos((prevState) => {
        return prevState.map((state) => {
          if (state.id === editingId) {
            return { ...state, input };
          } else {
            return state;
          }
        });
      });
      setInput("");
      setEditingId("");
      return;
    }

    if (input) {
      setTodos((prevState) => [
        ...prevState,
        { input, id: crypto.randomUUID() },
      ]);
      setInput("");
      setEditingId("");
    } else {
      setError(true);
    }
  }
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
      <div
        className="absolute text-xl cursor-pointer top-4 right-5"
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("isDark", JSON.parse(!isDark));
        }}
      >
        {isDark ? <MdLightMode /> : <MdDarkMode />}
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
          className={`flex-1 w-full p-3 outline-none text-slate-950 ${
            isDark ? "bg-[#303952] text-white" : "bg-[#edeef9]"
          }`}
        />
        <button
          className={`${
            isDark ? "bg-[#40407a]" : "bg-[#8758ff]"
          } text-white px-4 rounded`}
          onClick={handleOnAdd}
        >
          {editingId ? "Edit Todo" : "Add Todo"}
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
