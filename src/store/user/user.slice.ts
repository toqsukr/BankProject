import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './user.actions';
import { IInitialState } from './user.interface';

const initialState: IInitialState = {
  user: localStorage.getItem('bank-project-user')
    ? JSON.parse(localStorage.getItem('bank-project-user') as string)
    : null,
  isLoading: false,
  userNotFound: false,
  phoneExist: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.phoneExist = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
        state.phoneExist = true;
        state.user = null;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.userNotFound = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
        state.userNotFound = true;
        state.user = null;
      });
  }
});
