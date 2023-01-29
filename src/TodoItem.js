import "./styles.css";
export default function TodoItem({ todo, toggleTodoById }) {
  console.log(todo.complete);
  const handleCheckBoxClick = () => {
    console.log(todo.id);
    toggleTodoById(todo.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          className="dd"
          checked={todo.complete}
          onChange={handleCheckBoxClick}
        />

        {todo.title}
      </label>
    </div>
  );
}
