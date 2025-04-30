import React from 'react';
import { CheckSquare, Square, Trash2 } from 'lucide-react';

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="flex items-center justify-between bg-white rounded-2xl shadow p-4">
      <button onClick={() => onToggle(todo.id)} className="mr-3">
        {todo.done ? (
          <CheckSquare className="w-5 h-5" />
        ) : (
          <Square className="w-5 h-5" />
        )}
      </button>
      <span
        className={`flex-grow ${
          todo.done ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>
        <Trash2 className="w-5 h-5" />
      </button>
    </li>
  );
}
