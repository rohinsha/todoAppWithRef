import "./styles.css";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, toggleTodoById }) {
  return todos.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} toggleTodoById={toggleTodoById} />
    );
  });
}
