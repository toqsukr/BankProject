import Popup from '@components/ui/popup/popup.component';
import { IShow } from '@interfaces/component.interface';
import { forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './addCardPopup.module.css';

const AddCardPopup = forwardRef<HTMLDivElement, IShow>((popupProps, ref) => {
  return (
    <Popup {...popupProps}>
      <CSSTransition
        in={popupProps.show}
        timeout={500}
        classNames={{
          enter: css.addCard_enter,
          enterActive: css.addCard_enter_active,
          exit: css.addCard_exit,
          exitActive: css.addCard_exit_active
        }}
        unmountOnExit
      >
        <div ref={ref} id={css.addContainer}>
          <p>content</p>
        </div>
      </CSSTransition>
    </Popup>
  );
});

export default AddCardPopup;
