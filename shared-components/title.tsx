import { memo, ReactNode, FC } from 'react';

interface TitleProps {
  children: ReactNode,
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  className?: string
}

const Title: FC<TitleProps> = ({
  headingLevel, className, children,
}) => {
  const Heading = headingLevel;

  if (!Heading) return null;

  return (
    <Heading className={className}>{children}</Heading>
  );
};

Title.defaultProps = {
  headingLevel: 'h4',
  className: '',
};

export default memo(Title);
