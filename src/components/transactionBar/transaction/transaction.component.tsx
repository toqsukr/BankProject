import TransactionIcon from '@components/ui/icons/transactionIcon.component';
import { FC } from 'react';
import { ITransaction } from './transaction.interface';
import css from './transaction.module.css';

const Transaction: FC<ITransaction> = ({ date, time, money, subject, image, message }) => {
  return (
    <section className={css.elementContainer}>
      <div className={css.subjectContainer}>
        {image ? <img src={image} /> : <TransactionIcon />}
        <div className={css.textContainer}>
          <span>{subject}</span>
          {message && <span>{message}</span>}
        </div>
      </div>
      <div className={css.textContainer}>
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className={css.moneyContainer}>{money}</div>
    </section>
  );
};

export default Transaction;
