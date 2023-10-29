import BarLayout from '@components/layouts/barLayout/barLayout.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import { FC } from 'react';
import css from './transactionBar.module.css';

const TransactionBar: FC = () => {
  return (
    <BarLayout>
      <div id={css.transactionHeader}>
        <SectionHeader title='Transactions History' />
        <span>Search</span>
      </div>
      <div id={css.transactionInnerContainer}>transaction</div>
    </BarLayout>
  );
};

export default TransactionBar;
