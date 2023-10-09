import BalanceBar from '@components/balanceBar/balanceBar.component';
import { FC } from 'react';
import css from './mainSection.module.css';

const MainSection: FC = () => {
  return (
    <section id={css.mainSection}>
      <BalanceBar />
    </section>
  );
};

export default MainSection;
