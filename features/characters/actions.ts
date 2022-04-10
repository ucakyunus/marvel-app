/* eslint-disable no-async-promise-executor */
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const getCharactersList = createAsyncThunk('characters/charactersList', () => new Promise(async (resolve, reject) => {
  try {
    const response = await api.get('/characters', {
      params: {
        limit: 200,
      },
    });

    const model = {
      list: response?.data?.data.results,
      totalCount: response?.data?.data.total,
    };

    return resolve(model);
  } catch (error) {
    return reject(error);
  }
}));
