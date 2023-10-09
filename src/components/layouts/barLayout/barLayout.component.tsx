import { FC, PropsWithChildren } from 'react';
import css from './barLayout.module.css';

const BarLayout: FC<PropsWithChildren> = ({ children }) => {
  return <section className={css.barLayoutContainer}>{children}</section>;
};

export default BarLayout;
