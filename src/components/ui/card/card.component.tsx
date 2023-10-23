import { usePaymentSystem } from '@hooks/usePaymentSystem.hook';
import { FC } from 'react';
import { ICardComponent } from './card.interface';
import css from './card.module.css';

const Card: FC<ICardComponent> = ({ cardNumber, expires, cardOwner }) => {
  const { detectPaymentSystem, PaymentSystemImages } = usePaymentSystem();
  return (
    <div id={css.cardContainer}>
      <div id={css.cardContent}>
        <span>{cardOwner}</span>
        <span>{expires}</span>
        <span>{cardNumber}</span>
        <img id={css.paymentSystem} src={PaymentSystemImages[detectPaymentSystem(cardNumber)]} />
      </div>
    </div>
  );
};

export default Card;
