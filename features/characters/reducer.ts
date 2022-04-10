/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { getCharactersList } from './actions';
import { ICharacter } from '../../interfaces';

type CharactersState = {
  list: ICharacter[];
  error?: Boolean;
  totalCount: Number
};

const initialState: CharactersState = {
  list: [],
  error: false,
  totalCount: 0,
};

export const charactersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCharactersList.fulfilled, (state, action: PayloadAction<CharactersState>) => {
      state.list = action.payload.list;
      state.totalCount = action.payload.totalCount;
    })
    .addCase(getCharactersList.rejected, (state) => {
      state.error = true;
      state.totalCount = 0;
    });
});

export default charactersReducer;
