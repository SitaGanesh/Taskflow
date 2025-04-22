'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks, toggleTask, deleteTask } from '@/store/taskSlice';
import { RootState } from '@/store';

// Define Task interface based on your store
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.task); // Typed useSelector
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => dispatch(setTasks(data)))
      .catch((err) => console.error('Failed to fetch tasks:', err));
  }, [dispatch]);

  const handleDelete = async (id: number) => { // Typed id parameter
    const res = await fetch('/api/tasks', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      dispatch(deleteTask(id));
    }
  };

  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center p-6">No tasks yet. Add one!</p>
      ) : (
        tasks.map((task: Task) => ( // Typed task parameter
          <div
            key={task.id}
            className="flex justify-between items-center px-6 py-3 border-b border-gray-200 hover:bg-gray-50 transition duration-150"
          >
            <div className="flex items-center space-x-3">
              {task.completed ? (
                <i className="fas fa-check-circle text-[#8000ff]"></i>
              ) : (
                <i className="far fa-circle text-[#8000ff]"></i>
              )}
              <span
                className={`${
                  task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                }`}
              >
                {task.title}
              </span>
            </div>
            <div>
              <button
                onClick={() => dispatch(toggleTask(task.id))}
                className="text-blue-600 hover:text-blue-800 mr-2"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-red-600 hover:text-red-800"
              >
                🗑️
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}