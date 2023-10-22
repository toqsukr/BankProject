import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contacts.actions';
import { IContactInitialState } from './contacts.interface';

const initialState: IContactInitialState = {
  contacts: localStorage.getItem('bank-project-contacts')
    ? JSON.parse(localStorage.getItem('bank-project-contacts') as string)
    : [],
  isLoading: false
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(getContacts.rejected, state => {
        state.isLoading = false;
        state.contacts = [];
      });
  }
});
