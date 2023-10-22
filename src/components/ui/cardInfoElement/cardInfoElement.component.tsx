import { useCard } from '@hooks/useCard.hook';
import { FC } from 'react';
import ArrowHeadIcon from '../icons/arrowHeadIcon.component';
import InactiveElement from '../inactiveElement/inactiveElement.component';
import { ICardInfoElement } from './cardInfoElement.interface';
import css from './cardInfoElement.module.css';

const CardInfoElement: FC<ICardInfoElement> = ({ title, icon: Icon }) => {
  const {
    state: { defalutCard, isLoading }
  } = useCard();
  return !!defalutCard && !isLoading ? (
    <div className={css.cardInfoElementContainer}>
      <div className={css.cardInfoElementInfoContainer}>
        {Icon && <Icon />}
        <span>{title}</span>
      </div>
      <ArrowHeadIcon className={css.icon} />
    </div>
  ) : (
    <InactiveElement />
  );
};

export default CardInfoElement;
