import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("낮음");
  const [filter, setFilter] = useState("전체");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.innerText);
  };

  const addTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: inputText,
        priority: priority,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "전체") {
      return true;
    } else if (filter === "완료") {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  });

  return (
    <div className="container">
      <div className="wrapper">
        <h1>To-Do List</h1>
        <div className="category">
          <div
            className="category-item"
            onClick={() => handleFilterChange("전체")}
          >
            전체
          </div>
          <div
            className="category-item"
            onClick={() => handleFilterChange("완료")}
          >
            완료
          </div>
          <div
            className="category-item"
            onClick={() => handleFilterChange("미완료")}
          >
            미완료
          </div>
        </div>
        <div className="search-filter">
          <input
            placeholder="할 일을 작성해주세요."
            value={inputText}
            onChange={handleInputChange}
          />
          <span>{priority}</span>
          <button onClick={handlePriorityChange}>낮음</button>
          <button onClick={handlePriorityChange}>보통</button>
          <button onClick={handlePriorityChange}>높음</button>
          <button onClick={handlePriorityChange}>아주 높음</button>
          <button onClick={addTodo}>추가</button>
        </div>
        <div className="content">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(todo.id)}
              />
              <span>{todo.text}</span>
              <span className="priority">[{todo.priority}]</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
