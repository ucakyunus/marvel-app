import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectCharacterDetail = (state: RootState) => state.characterDetail;

export const charactersSelector = createSelector(
  selectCharacterDetail,
  (state) => state,
);
