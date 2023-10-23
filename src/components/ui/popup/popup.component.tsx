import { IShow } from '@interfaces/component.interface';
import { FC, HTMLAttributes, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './popup.module.css';

interface IPopup extends IShow, HTMLAttributes<HTMLDivElement> {}

const Popup: FC<IPopup> = ({ show, children }) => {
  const popupRef = useRef(null);
  return (
    <CSSTransition
      in={show}
      timeout={500}
      nodeRef={popupRef}
      classNames={{
        enter: css.popup_enter,
        enterActive: css.popup_enter_active,
        exit: css.popup_exit,
        exitActive: css.popup_exit_active
      }}
      mountOnEnter
      unmountOnExit
    >
      <aside ref={popupRef} className={css.popup}>
        {children}
      </aside>
    </CSSTransition>
  );
};

export default Popup;
