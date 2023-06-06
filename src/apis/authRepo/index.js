import {createAsyncThunk} from '@reduxjs/toolkit';
import apiRepo from './repo';
import apiNames from '../apiNames';
import {Alert} from 'react-native';

export const checkProfileImg = createAsyncThunk(
  apiNames.login,
  async (payload, thunkAPI) => {
    try {
      const response = await apiRepo.loginApi(payload);
      let responseData = response.data;
      if (responseData.code == 200) {
        return true;
      }
    } catch (err) {
      console.log(apiNames.login, ' error', err);
    }
    return false;
  },
);
