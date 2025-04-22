import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (_, action: PayloadAction<Task[]>) => action.payload,
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { setTasks, addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;