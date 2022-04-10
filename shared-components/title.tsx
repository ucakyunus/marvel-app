import {
  memo, ReactNode, FC, CSSProperties,
} from 'react';

interface TitleProps {
  children: ReactNode,
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
  className?: string,
  style?: CSSProperties
}

const Title: FC<TitleProps> = ({
  headingLevel, children, className, style,
}) => {
  const Heading = headingLevel;

  if (!Heading) return null;

  return (
    <Heading style={style} className={className}>{children}</Heading>
  );
};

Title.defaultProps = {
  headingLevel: 'h4',
  className: '',
  style: {},
};

export default memo(Title);
