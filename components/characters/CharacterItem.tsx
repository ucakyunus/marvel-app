import React, { memo, FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Title } from '../../shared-components';

import styles from '../../styles/CharacterItem.module.css';

type CharacterItemProps = {
  poster: string,
  name: string,
  characterId: Number | String,
  description: String
}

const CharacterItem: FC<CharacterItemProps> = ({
  poster, name, characterId, description,
}) => (
  <Link scroll={false} href={`/characters/${characterId}`}>
    <a className={styles.listItem}>
      <div className={styles.imageContainer}>
        <Image
          src={poster}
          alt={name}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          quality="50"
          placeholder="blur"
          blurDataURL={poster}
        />
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
