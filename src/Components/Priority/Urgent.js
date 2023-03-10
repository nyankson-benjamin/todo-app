import React, { useEffect, useState } from "react";
import TodoList from "../TodoList";
import AddButton from "../../Buttons/AddButton";
function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log('Loading...')
    setTimeout(() => {
      fetch("http://localhost:8000/Urgent/")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.log(err));
      console.log('Loaded')
    }, 3000);
   
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/Urgent/" + id, {
      method: "DELETE",
    });
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  return (
    <div>
      <TodoList
        todos={todos}
        title="Today's Task"
        handleDelete={handleDelete}
      />
      <AddButton />
    </div>
  );
}

export default Todos;
