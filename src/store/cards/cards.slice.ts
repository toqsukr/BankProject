import { createSlice } from '@reduxjs/toolkit';
import { getCards } from './cards.actions';
import { ICardInitialState } from './cards.interface';

const initialState: ICardInitialState = {
  cards: localStorage.getItem('bank-project-cards')
    ? JSON.parse(localStorage.getItem('bank-project-cards') as string)
    : [],
  isLoading: false
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCards.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCards.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cards = payload;
      })
      .addCase(getCards.rejected, state => {
        state.isLoading = false;
        state.cards = [];
      });
  }
});
