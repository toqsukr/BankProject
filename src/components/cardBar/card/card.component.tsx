import { useAuth } from '@hooks/useAuth.hook';
import { FC } from 'react';
import { cardData } from './card.data';
import { paymentURL } from './card.interface';
import css from './card.module.css';

const Card: FC = () => {
  const { cardNumber, paymentSystem } = cardData;
  const { user } = useAuth();
  return (
    <div id={css.cardContainer}>
      <div id={css.card}>
        <div id={css.cardInnerContainer}>
          <span id={css.cardOwner}>{`${user?.name} ${user?.surname}`}</span>
          <img src={paymentURL[paymentSystem]} className={css.cardInnerRightContianer} id={css.mastercard} />
          <span id={css.cardNumber}>{cardNumber}</span>
          <span className={css.cardInnerRightContianer} id={css.cardCVV}>
            CVV
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
