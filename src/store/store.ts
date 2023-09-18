import { configureStore } from '@reduxjs/toolkit';
import wordsSlice from 'store/words/slice';

export const store = configureStore({
  reducer: {
    words: wordsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
