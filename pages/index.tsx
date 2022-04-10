import type { NextPage } from 'next';
import { FaGithub } from 'react-icons/fa';
import { Layout, Title, CardLink } from '../shared-components';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <Layout label="Ana Sayfa">
    <>
      <a
        className={styles.goToGithub}
        target="blank"
        href="https://github.com/ucakyunus/iyzico-case"
      >
        <FaGithub size={20} />
        <Title headingLevel="h5">Proje Linki</Title>
      </a>
      <main className={styles.mainHome}>
        <Title headingLevel="h1" className={styles.title}>Marvel App</Title>
        <div className={styles.grid}>
          <CardLink
            href="/characters"
            subtitle="Marvel Characters"
            content="The Marvel API"
          />
        </div>
      </main>
    </>
  </Layout>
);

export default Home;
