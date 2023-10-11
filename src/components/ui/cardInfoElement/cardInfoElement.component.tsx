import { FC } from 'react';
import ArrowHeadIcon from '../icons/arrowHeadIcon.component';
import { ICardInfoElement } from './cardInfoElement.interface';
import css from './cardInfoElement.module.css';

const CardInfoElement: FC<ICardInfoElement> = ({ title, icon: Icon }) => {
  return (
    <div className={css.cardInfoElementContainer}>
      <div className={css.cardInfoElementInfoContainer}>
        {Icon && <Icon />}
        <span>{title}</span>
      </div>
      <ArrowHeadIcon className={css.icon} />
    </div>
  );
};

export default CardInfoElement;
