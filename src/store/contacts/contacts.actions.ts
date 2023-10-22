import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from '@services/user/user.service';
import { IContact } from './contacts.interface';

export const getContacts = createAsyncThunk<IContact[], string>('/user/contacts', async (data, thunkApi) => {
  try {
    const response = await UserService.getUserContacts(data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
