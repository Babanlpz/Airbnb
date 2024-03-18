import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface CardItem {
  id: number;
  city: string;
  country: string;
  date: string;
  price_per_night: number;
  rating: number;
  owner: string;
  img: string[];
}

interface CardListState {
  cards: CardItem[];
}

const initialState: CardListState = {
  cards: [],
};

export const cardListSlice = createSlice({
  name: "cardList",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardItem>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<CardItem[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { setCards } = cardListSlice.actions;
export const selectCards = (state: RootState) => state.cardList.cards;

export default cardListSlice.reducer;
