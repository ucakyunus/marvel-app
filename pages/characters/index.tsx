import {
  getCharactersList,
  charactersSelector,
} from '../../features/characters';
import { wrapper } from '../../app/store';
import { Layout } from '../../shared-components';
import { useAppSelector } from '../../app/hooks';

const CharactersPage = () => {
  const data = useAppSelector(charactersSelector);
  console.log('🚀 ~ file: index.tsx ~ line 11 ~ CharactersPage ~ data', data);
  return (
    <Layout label="Characters">
      <div>
        <p>Falan Filan</p>
      </div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getCharactersList());
    return {
      props: {},
    };
  },
);

export default CharactersPage;
