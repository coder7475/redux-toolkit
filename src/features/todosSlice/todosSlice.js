import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk("todos/fetchTodos",
 async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
 } )

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    error: null,
    todos: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      state.error = null;
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.todos = [];
      state.error = action.error.message;
    })
  }
})

// export the reducer and actions
export const { 
  increment, 
  decrement, 
  reset, 
  increaseByNumber 
} = todosSlice.actions;

export default todosSlice.reducer;