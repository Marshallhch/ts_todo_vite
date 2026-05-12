import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [] as Todo[],
  },

  reducers: {
    addTodo: (state, action: { payload: Todo }) => {
      state.todos.push(action.payload);
    },

    updateTodo: (state, action: { payload: Todo }) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      state.todos[index] = { ...state.todos[index], ...action.payload };
    },

    deleteTodo: () => {},

    completeTodo: () => {},
  },
});

export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
