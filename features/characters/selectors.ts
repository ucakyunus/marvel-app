import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectCharacterList = (state: RootState) => state.characters;

export const charactersSelector = createSelector(
  selectCharacterList,
  (state) => state,
);
