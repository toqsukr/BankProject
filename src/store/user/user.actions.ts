import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthResponse, ILoginRequest, IRegisterRequest, IUser } from '@services/auth/auth.interface';
import { AuthService } from '@services/auth/auth.service';
import { ProfileService } from '@services/profile/profile.service';

export const login = createAsyncThunk<IAuthResponse, ILoginRequest>('/auth/login', async (data, thunkApi) => {
  try {
    const response = await AuthService.login(data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const register = createAsyncThunk<IAuthResponse, IRegisterRequest>(
  '/auth/register',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.register(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk<IUser, string>('/user', async (data, thunkApi) => {
  try {
    const response = await ProfileService.getProfile(data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
