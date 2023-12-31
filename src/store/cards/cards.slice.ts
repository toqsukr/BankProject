import { createSlice } from '@reduxjs/toolkit';
import { appendCard, deleteCard, getCards } from './cards.actions';
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
      })
      .addCase(appendCard.pending, state => {
        state.isLoading = true;
      })
      .addCase(appendCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cards = payload;
      })
      .addCase(appendCard.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteCard.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cards = payload;
      })
      .addCase(deleteCard.rejected, state => {
        state.isLoading = false;
      });
  }
});
