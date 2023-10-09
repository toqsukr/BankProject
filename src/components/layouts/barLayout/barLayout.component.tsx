import { FC, HTMLAttributes } from 'react';
import css from './barLayout.module.css';

const BarLayout: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <section {...props} className={`${css.barLayoutContainer}`}>
      {children}
    </section>
  );
};

export default BarLayout;
