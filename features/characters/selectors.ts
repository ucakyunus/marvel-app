import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ICharacter } from '../../interfaces';

export const selectCharacterList = (state: RootState) => ({
  ...state.characters,
  list: state.characters.list.map((character:ICharacter) => ({
    name: character.name,
    description: character.description,
    id: character.id,
    thumbnail: character.thumbnail,
  })),
});

export const selectCharacterDetail = (state: RootState) => state.characterDetail;

export const charactersSelector = createSelector(
  selectCharacterList,
  selectCharacterDetail,
  (state) => state,
);
