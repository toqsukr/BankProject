import { useAuth } from '@hooks/useAuth.hook';
import { useCard } from '@hooks/useCard.hook';
import { usePaymentSystem } from '@hooks/usePaymentSystem.hook';
import { FC } from 'react';
import css from './card.module.css';

const Card: FC = () => {
  const {
    state: { defalutCard, isLoading }
  } = useCard();
  const {
    state: { user }
  } = useAuth();

  const { detectPaymentSystem, PaymentSystemImages } = usePaymentSystem();

  return (
    !isLoading &&
    defalutCard && (
      <div id={css.cardContainer}>
        <div id={css.card}>
          <div id={css.cardInnerContainer}>
            <span id={css.cardOwner}>{`${user?.name} ${user?.surname}`}</span>
            <img
              src={PaymentSystemImages[detectPaymentSystem(defalutCard.cardNumber)]}
              className={css.cardInnerRightContianer}
              id={css.mastercard}
            />
            <span id={css.cardNumber}>{defalutCard?.cardNumber}</span>
            <span className={css.cardInnerRightContianer} id={css.cardCVV}>
              CVV
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
