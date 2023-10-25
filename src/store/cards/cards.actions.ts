import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICardRequest } from '@services/user/user.interface';
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

export const appendCard = createAsyncThunk<ICard[], ICardRequest>(
  '/user/cards/add',
  async (data, thunkApi) => {
    try {
      const response = await UserService.appendCard(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteCard = createAsyncThunk<ICard[], { cardNumber: string }>(
  '/user/cards/delete',
  async (data, thunkApi) => {
    try {
      const response = await UserService.deleteCard(data.cardNumber);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
