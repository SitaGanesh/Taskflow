'use client';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';

export default function HomePage() {
  return (
    <div className="w-[900px] mx-auto mt-10">
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-6">TaskFlow</h1>
      <div className="bg-[#6200EE] text-white rounded-md text-center py-3 mb-6 cursor-pointer hover:bg-[#5000cc] transition duration-200">
        <div className=" font-semibold uppercase tracking-wide text-sm">
          <h1 className="text-white font-bold">Add New Task </h1>
        </div>
      </div>
      <div className="bg-gray-100 rounded-t-md flex justify-between px-6 py-3 text-sm font-semibold text-gray-700">
        <span>Tasks</span>
        <span>Actions</span>
      </div>
      <div className="bg-white rounded-b-md shadow-md">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}