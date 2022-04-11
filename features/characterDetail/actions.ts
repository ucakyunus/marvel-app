import { createAsyncThunk } from '@reduxjs/toolkit';
import marvelApi from '../../services/api';
import { IResponse } from '../../interfaces';

export const getCharacterDetail = createAsyncThunk(
  'characters/characterDetail',
  async (characterId: string) => {
    const response: IResponse = await marvelApi.get(`characters/${characterId}`);
    return {
      characterDetail: response?.results[0],
    };
  },
  {
    condition: (characterId) => {
      if (!characterId) {
        return false;
      }
      return true;
    },
  },
);
