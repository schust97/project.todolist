import React, { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Lahcen todolist</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos} />
    </div>
  );
}
