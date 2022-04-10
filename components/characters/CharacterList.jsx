/* eslint-disable react/forbid-prop-types */
import React, { memo } from 'react';

import CharacterItem from './CharacterItem';

import styles from '../../styles/CharacterList.module.css';

const CharacterList = ({ list }) => (
  <div className={styles.list}>
    {list.map((characterItem, index) => (
      <CharacterItem
        key={index}
        poster={characterItem.image}
        name={characterItem.name}
        description={characterItem.description}
        characterId={characterItem.id}
      />
    ))}
  </div>
);

export default memo(CharacterList);
