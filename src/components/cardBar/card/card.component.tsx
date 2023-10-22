import { useAuth } from '@hooks/useAuth.hook';
import { useCard } from '@hooks/useCard.hook';
import { FC, useEffect } from 'react';
import css from './card.module.css';

const Card: FC = () => {
  const {
    state: { defalutCard },
    actions: { getCards }
  } = useCard();
  const {
    state: { user }
  } = useAuth();

  useEffect(() => {
    user && getCards(user.phone);
  }, []);
  return !!defalutCard ? (
    <div id={css.cardContainer}>
      <div id={css.card}>
        <div id={css.cardInnerContainer}>
          <span id={css.cardOwner}>{`${user?.name} ${user?.surname}`}</span>
          <img src='' className={css.cardInnerRightContianer} id={css.mastercard} />
          <span id={css.cardNumber}>{defalutCard?.cardNumber}</span>
          <span className={css.cardInnerRightContianer} id={css.cardCVV}>
            {defalutCard?.code}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div>Добавить карту</div>
  );
};

export default Card;
