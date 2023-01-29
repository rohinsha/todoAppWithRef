import "./styles.css";
import data from "./data.json";
import TodoList from "./TodoList";
import StaticTodo from "./StaticTodo";
import { useRef, useState, useEffect } from "react";
import { v4 } from "uuid";
const LOCALSTORAGE_KEY = "todos.data";
export default function App() {
  const inputTextRef = useRef();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    // console.log(JSON.stringify(todos));
    const newTodos1 = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (newTodos1) setTodos(newTodos1);
  }, []);
  useEffect(() => {
    console.log(JSON.stringify(todos));
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    console.log(JSON.stringify(todos));
  }, [todos]);
  const addTodo = () => {
    console.log(inputTextRef.current.value);
    const inputVal = inputTextRef.current.value;
    if (inputVal === "") return;
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: v4(),
          title: inputVal,
          complete: false
        }
      ];
    });
    inputTextRef.current.value = "";
    // console.log(JSON.stringify(todos));
  };
  const deleteTodo = () => {
    const kol = todos.filter((item) => item.complete === false);
    setTodos(kol);
  };
  const toggleTodoById = (id) => {
    const newTodos = [...todos];
    const newTodo = newTodos.find((item) => item.id === id);
    console.log(!newTodo.complete + "hdhfgdhfgdhf");
    newTodo.complete = !newTodo.complete;
    console.log(newTodo.complete + "dsdhsdhgsdhgshdgshdgshd");
    console.log(JSON.stringify(newTodos) + "gfgfgfg");
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h2>Todo App</h2>
      <StaticTodo staticTodos={data} />
      <TodoList todos={todos} toggleTodoById={toggleTodoById} />

      <input type="text" ref={inputTextRef} />
      <button onClick={addTodo}>Add todo </button>
      <button onClick={deleteTodo}>Delete todo </button>
      <h4>
        {todos.filter((item) => item.complete === false).length} Todo left to
        complete
      </h4>
    </div>
  );
}
