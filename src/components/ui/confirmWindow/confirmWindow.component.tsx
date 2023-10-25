import { forwardRef } from 'react';
import Button from '../button/button.component';
import Popup from '../popup/popup.component';
import { IConfirm } from './confirmWindow.interface';
import css from './confirmWindow.module.css';

const ConfirmWindow = forwardRef<HTMLDivElement, IConfirm>(({ show, setShow, title, text, action }, ref) => {
  return (
    <Popup show={show} setShow={setShow}>
      <div ref={ref} className={css.confirmContainer}>
        <div className={css.textContainer}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className={css.buttonContainer}>
          <Button onClick={action} color='pink' text='Confirm' />
          <Button onClick={() => setShow(false)} color='white' text='Cancel' />
        </div>
      </div>
    </Popup>
  );
});
export default ConfirmWindow;
