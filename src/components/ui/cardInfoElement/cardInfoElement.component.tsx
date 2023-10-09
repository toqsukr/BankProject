import { FC, PropsWithChildren } from 'react';
import ArrowHeadIcon from '../icons/arrowHeadIcon.component';
import { ICardInfoElement } from './cardInfoElement.interface';
import css from './cardInfoElement.module.css';

const CardInfoElement: FC<PropsWithChildren<ICardInfoElement>> = ({ title, children }) => {
  return (
    <div className={css.cardInfoElementContainer}>
      <div className={css.cardInfoElementInfoContainer}>
        {children}
        <span>{title}</span>
      </div>
      <ArrowHeadIcon className={css.icon} />
    </div>
  );
};

export default CardInfoElement;
