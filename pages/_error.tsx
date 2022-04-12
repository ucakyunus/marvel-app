import { NextPage } from 'next';
import { Title } from '../shared-components';

type ErrorPageProps = {
  statusCode: number
}

const Error: NextPage<ErrorPageProps> = ({ statusCode }) => (
  <div style={{ display: 'flex', justifyContent: 'center', height: '40px' }}>
    <Title headingLevel="p" style={{ fontSize: '24px' }}>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </Title>
  </div>

);

Error.getInitialProps = ({ res, err }: any) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
