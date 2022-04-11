/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getCharactersList,
  getSearchedCharactersList,
  resetCharacterList,
  // getCharacterDetail,
} from './actions';
import { ICharacter } from '../../interfaces';

export interface CharactersState {
  list: ICharacter[];
  error?: Boolean;
  pending?: Boolean;
  searchPending?: Boolean;
  availableTotalPage?: number;
  currentPage?: number | undefined;
}

const initialState: CharactersState = {
  list: [],
  error: false,
  pending: false,
  searchPending: false,
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
      if (state?.currentPage) {
        state.currentPage += 1;
      } else {
        state.currentPage = 0;
      }
    })
    .addCase(getCharactersList.rejected, (state) => {
      state.error = true;
      state.pending = false;
    })
    .addCase(getSearchedCharactersList.pending, (state) => {
      state.searchPending = true;
      state.error = false;
    })
    .addCase(
      getSearchedCharactersList.fulfilled,
      (state, action: PayloadAction<CharactersState>) => {
        state.searchPending = false;
        state.list = [...action.payload.list];
        state.availableTotalPage = action.payload.availableTotalPage;
        state.currentPage = 0;
      },
    )
    .addCase(getSearchedCharactersList.rejected, (state) => {
      state.error = true;
      state.searchPending = false;
    })
    .addCase(resetCharacterList, (state) => {
      state.list = [];
    });
  // .addCase(getCharacterDetail.pending, (state) => {
  //   state.pending = true;
  //   state.error = false;
  // })
  // .addCase(
  //   getCharacterDetail.fulfilled,
  //   (state, action: PayloadAction<CharacterDetailState>) => {
  //     state.pending = false;
  //     state.characterDetail = action.payload.characterDetail;
  //   },
  // )
  // .addCase(getCharacterDetail.rejected, (state) => {
  //   state.error = true;
  //   state.pending = false;
  // });
});

export default charactersReducer;
