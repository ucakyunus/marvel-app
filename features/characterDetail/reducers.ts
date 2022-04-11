/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { getCharacterDetail } from './actions';
import { ICharacter } from '../../interfaces';

export interface CharacterDetailState {
  error?: Boolean;
  pending?: Boolean;
  characterDetail: ICharacter | null
}

const initialState: CharacterDetailState = {
  error: false,
  pending: false,
  characterDetail: null,
};

export const characterDetailReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCharacterDetail.pending, (state) => {
      state.pending = true;
      state.error = false;
    })
    .addCase(getCharacterDetail.fulfilled, (state, action: PayloadAction<CharacterDetailState>) => {
      state.pending = false;
      state.characterDetail = action.payload.characterDetail;
    })
    .addCase(getCharacterDetail.rejected, (state) => {
      state.error = true;
      state.pending = false;
    });
});

export default characterDetailReducer;
