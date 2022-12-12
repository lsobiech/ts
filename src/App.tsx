import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models/todo.models";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const items = [
    {
      id: "t1",
      text: "Find the course",
    },
  ];

  const todoAddHandler = (text: string) => {
    console.log("text", text);
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
