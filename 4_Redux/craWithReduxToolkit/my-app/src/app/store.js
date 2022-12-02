import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import stopWatchReducer from '../features/stopWatch/stopWatchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stopWatch: stopWatchReducer
  },
});
