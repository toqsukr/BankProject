import BarLayout from '@components/layouts/barLayout/barLayout.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import { FC } from 'react';
import Transaction from './transaction/transaction.component';
import { transactions } from './transactionBar.data';
import css from './transactionBar.module.css';

const TransactionBar: FC = () => {
  return (
    <BarLayout>
      <div id={css.transactionHeader}>
        <SectionHeader title='Transactions History' />
        <span>Search</span>
      </div>
      <div id={css.transactionInnerContainer}>
        {transactions.map((transaction, index) => (
          <Transaction key={index} {...transaction} />
        ))}
      </div>
    </BarLayout>
  );
};

export default TransactionBar;
