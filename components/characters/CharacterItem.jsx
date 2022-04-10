import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Title } from '../../shared-components';

import styles from '../../styles/CharacterItem.module.css';

const CharacterItem = ({
  poster, name, characterId, description,
}) => (
  <Link href={`character-detail/${characterId}`}>
    <a className={styles.listItem}>
      <div className={styles.imageContainer}>
        <Image src={poster} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.contentContainer}>
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

export default memo(CharacterItem);
