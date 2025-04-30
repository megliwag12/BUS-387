import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) =>
    setTodos([...todos, { id: Date.now(), text, done: false }]);

  const toggle = (id) =>
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  const remove = (id) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 via-white to-teal-50 p-6">
      <h1 className="text-4xl font-bold mb-6">My Tasks</h1>
      <TodoInput onAdd={addTodo} />
      <ul className="w-full max-w-lg space-y-2 mt-6">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggle}
            onRemove={remove}
          />
        ))}
      </ul>
    </div>
  );
}
