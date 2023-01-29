const StaticTodo = ({ staticTodos }) => {
  return (
    <>
      <ol className="mainDiv">
        {staticTodos.map((item, i) => {
          return (
            <div key={item.id} style={{ border: "1px solid black" }}>
              <li>{item.Title}</li>
            </div>
          );
        })}
      </ol>
    </>
  );
};

export default StaticTodo;
