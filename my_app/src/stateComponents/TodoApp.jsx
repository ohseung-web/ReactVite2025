import { useState } from "react";
import "./TodoApp.css";

// 할 일 아이템 컴포넌트
function TodoItem({ todo, onToggle }) {
  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

// 메인 TodoApp 컴포넌트
export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "React 공부하기", completed: false },
    { id: 2, text: "운동하기", completed: true },
    { id: 3, text: "장보기", completed: false },
  ]);

  // 완료 상태 토글 함수
  const toggleTodo = (id) => {
    const newTodos = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>📝 Todo List</h1>
      <ul>
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
