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
  // extraReducers: (builder) => {

  // }
})

export default  todosSlice;