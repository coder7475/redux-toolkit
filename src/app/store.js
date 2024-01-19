import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../features/counterSlice/counterSlice';
import todosReducer from '../features/todosSlice/todosSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
})

export default store;