import BalanceBar from '@components/balanceBar/balanceBar.component';
import ContactBar from '@components/contactBar/contactBar.component';
import TransactionBar from '@components/transactionBar/transactionBar.component';
import { FC } from 'react';
import css from './mainSection.module.css';

const MainSection: FC = () => {
  return (
    <section id={css.mainSection}>
      <BalanceBar />
      <ContactBar />
      <TransactionBar />
    </section>
  );
};

export default MainSection;
