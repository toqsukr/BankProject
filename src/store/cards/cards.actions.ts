import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from '@services/user/user.service';
import { ICard } from './cards.interface';

export const getCards = createAsyncThunk<ICard[], string>('/user/cards', async (data, thunkApi) => {
  try {
    const response = await UserService.getUserCards(data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
