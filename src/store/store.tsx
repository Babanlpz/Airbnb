import { configureStore } from "@reduxjs/toolkit";
import CardListReducer from "../slice/cardSlice";

export const store = configureStore({
  reducer: {
    cardList: CardListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
