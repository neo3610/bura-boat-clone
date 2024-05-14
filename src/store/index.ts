import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./slices/modals/modalsSlice.ts";
import { buraBoatApi } from "@store/buraboatApi.ts";

const rootReducer = combineReducers({
  modals: modalsSlice,
  [buraBoatApi.reducerPath]: buraBoatApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(buraBoatApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
