/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { getCharactersList } from './actions';
import { ICharacter } from '../../interfaces';

export interface CharactersState {
  list: ICharacter[];
  error?: Boolean;
  pending?: Boolean;
  availableTotalPage?: number
  currentPage: number;
}

const initialState: CharactersState = {
  list: [],
  error: false,
  pending: false,
  availableTotalPage: 0,
  currentPage: 0,
};

export const charactersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCharactersList.pending, (state) => {
      state.pending = true;
      state.error = false;
    })
    .addCase(getCharactersList.fulfilled, (state, action: PayloadAction<CharactersState>) => {
      state.pending = false;
      state.list = [...state.list, ...action.payload.list];
      state.availableTotalPage = action.payload.availableTotalPage;
      state.currentPage += 1;
    })
    .addCase(getCharactersList.rejected, (state) => {
      state.error = true;
      state.pending = false;
    });
});

export default charactersReducer;
