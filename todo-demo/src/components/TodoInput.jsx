import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue('');
    }
  };
  return (
    <form onSubmit={submit} className="flex w-full max-w-lg">
      <input
        className="flex-grow rounded-l-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Add a new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-r-2xl p-3"
      >
        <Plus className="w-5 h-5" />
      </button>
    </form>
  );
}
