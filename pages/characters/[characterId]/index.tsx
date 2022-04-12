/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import marvelApi from '../../../services/api';
import { wrapper } from '../../../app/store';
import { Layout, Title, TextShow } from '../../../shared-components';
import {
  IResponse, ICharacter, ComicSummary, SeriesSummary,
} from '../../../interfaces';
import styles from '../../../styles/CharacterDetail.module.css';

type CharacterDetailProps = {
  characterDetail: ICharacter
}

const CharacterDetail: FC<CharacterDetailProps> = ({ characterDetail }) => {
  const router = useRouter();

  const getDetailList = (list: ComicSummary[] | SeriesSummary[]) => (
    <ul>
      {list.map((comic: ComicSummary | SeriesSummary, index: number) => (
        <li key={index}>{comic?.name}</li>
      ))}
    </ul>
  );

  return (
    <Layout label="Detail">
      <main>
        <a className={styles.backButton} onClick={() => router.back()}>
          <FaArrowLeft />
          {' '}
          <Title>Back</Title>
        </a>

        <div className={styles.characterDetail}>
          <Image
            src={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
            alt={characterDetail.name}
            layout="intrinsic"
            width={700}
            height={600}
            objectFit="cover"
            priority
            loading="eager"
            quality="50"
            placeholder="blur"
            blurDataURL={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
          />
          <div className={styles.textList}>
            <TextShow textKey="Name" textValue={characterDetail.name} />
            {characterDetail.description && <TextShow textKey="Description" textValue={characterDetail.description} />}
            {characterDetail.comics.items.length > 0 && (
              <TextShow textKey="Comics">
                {getDetailList(characterDetail.comics.items)}
              </TextShow>
            )}
            {characterDetail.series.items.length > 0 && (
              <TextShow textKey="Series">
                {getDetailList(characterDetail.series.items)}
              </TextShow>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  () => async (context) => {
    try {
      const characterId: string = context.params?.characterId as string || '';
      const response: IResponse = await marvelApi.get(`characters/${characterId}`);
      return {
        props: {
          characterDetail: response.results[0],
        },
      };
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
export default CharacterDetail;
