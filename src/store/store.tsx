import { configureStore } from "@reduxjs/toolkit";
import CardListSlice from "../slice/cardSlice";

export const store = configureStore({
  reducer: {
    cardList: CardListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
