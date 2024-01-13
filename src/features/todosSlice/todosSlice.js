import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    error: null,
    todos: [],
  }
})