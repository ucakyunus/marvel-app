import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

import { Title } from '../../shared-components';

import styles from '../../styles/CharacterItem.module.css';

const CharacterItem = ({
  poster, name, characterId, description,
}) => {
  console.log('🚀 ~ file: CharacterItem.jsx ~ line 12 ~ name', name);
  console.log('🚀 ~ file: CharacterItem.jsx ~ line 12 ~ characterId', characterId);
  console.log('🚀 ~ file: CharacterItem.jsx ~ line 12 ~ poster', poster);
  return (
    <Link href={`character-detail/${characterId}`}>
      <a className={styles.listItem}>
        {/* <Image src={poster} alt={name} /> */}
        <div>
          <div>
            <Title>{name}</Title>
          </div>
          <div className={styles.description}>
            <Title headingLevel="p">{description}</Title>
          </div>
        </div>

      </a>
    </Link>
  );
};

export default CharacterItem;
