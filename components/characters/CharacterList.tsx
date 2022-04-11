import React, { memo, FC } from 'react';
import CharacterItem from './CharacterItem';
import styles from '../../styles/CharacterList.module.css';
import { ICharacter } from '../../interfaces';

type CharacterListProps = {
 list: ICharacter[],
}

const CharacterList: FC<CharacterListProps> = ({ list }) => (
  <div className={styles.list}>
    {list.map((characterItem, index) => (
      <CharacterItem
        key={index}
        poster={`${characterItem.thumbnail.path}.${characterItem.thumbnail.extension}`}
        name={characterItem.name}
        description={characterItem.description}
        characterId={characterItem.id}
      />
    ))}
  </div>
);

export default memo(CharacterList);
