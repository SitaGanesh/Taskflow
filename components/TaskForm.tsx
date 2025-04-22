'use client';
import { useDispatch } from 'react-redux';
import { addTask } from '@/store/taskSlice';
import { useState } from 'react';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addTask(data));
        setTitle('');
      })
      .catch((err) => console.error('Failed to add task:', err));
  };

  return (
    <form onSubmit={handleSubmit} className="p-15">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className=" flex items-center space-x-3 w-full border border-gray-300 p-30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6200EE] placeholder-gray-400"
        placeholder="Enter a new task"
      />
    </form>
  );
}