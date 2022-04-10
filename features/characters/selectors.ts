import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ICharacter } from '../../interfaces';

export const selectCharacterList = (state: RootState) => ({
  ...state.characters,
  list: state.characters.list.map((character:ICharacter) => ({
    name: character.name,
    description: character.description,
    id: character.id,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  })),
});

export const charactersSelector = createSelector(
  selectCharacterList,
  (state) => state,
);
