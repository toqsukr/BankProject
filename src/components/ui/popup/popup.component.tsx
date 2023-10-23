import { IShow } from '@interfaces/component.interface';
import { FC, HTMLAttributes } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './popup.module.css';

interface IPopup extends IShow, HTMLAttributes<HTMLDivElement> {}

const Popup: FC<IPopup> = ({ show, children }) => {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames={{
        enter: css.popup_enter,
        enterActive: css.popup_enter_active,
        exit: css.popup_exit,
        exitActive: css.popup_exit_active
      }}
      unmountOnExit
    >
      <aside className={css.popup}>{children}</aside>
    </CSSTransition>
  );
};

export default Popup;
