import { configureStore } from '@reduxjs/toolkit';
import { gameApi } from '../apiSlice/api';

export const store = configureStore({
  reducer: { [gameApi.reducerPath]: gameApi.reducer },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gameApi.middleware),
});
