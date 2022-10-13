import React from 'react';
import useStyles from './styles';

export type PageProps = {
  slideDirection: 'up' | 'down' | 'left' | 'right';
};

const Page: React.FC<React.PropsWithChildren<PageProps>> = (props) => {
  const { children } = props;

  useStyles(props);

  return <section className="page">{children}</section>;
};

export default Page;
