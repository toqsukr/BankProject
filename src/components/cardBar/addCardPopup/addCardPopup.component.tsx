import Button from '@components/ui/button/button.component';
import Card from '@components/ui/card/card.component';
import Input from '@components/ui/input/input.component';
import Popup from '@components/ui/popup/popup.component';
import { IShow } from '@interfaces/component.interface';
import { ICard } from '@store/cards/cards.interface';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { defaultCardData } from './addCardPopup.data';
import css from './addCardPopup.module.css';

const AddCardPopup = forwardRef<HTMLDivElement, IShow>((popupProps, ref) => {
  const { handleSubmit, watch, register } = useForm<ICard>();

  const onSubmit = () => {};

  const cardNumber = watch('cardNumber', '');
  const cardOwner = watch('cardOwner', '');
  const expires = watch('expires', '');
  return (
    <Popup {...popupProps}>
      <div
        ref={ref}
        className={classNames({ [css.addContainer]: true, [css.addContainerShow]: popupProps.show })}
      >
        <Card
          cardNumber={cardNumber || defaultCardData.cardNumber}
          cardOwner={cardOwner || defaultCardData.cardOwner}
          expires={expires || defaultCardData.expires}
        />
        <form id={css.addCardForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputsContainer}>
            <Input {...register('cardOwner')} placeholder='Name' type='text' />
            <Input {...register('expires')} placeholder='Expires' type='tel' />
            <Input {...register('cardNumber')} placeholder='Card number' type='tel' />
            <Input {...register('code')} placeholder='Code' type='password' />
          </div>
          <div className={css.buttonContainer}>
            <Button color='purple' text='Submit' />
            <Button color='white' text='Cancel' onClick={() => popupProps.setShow(false)} />
          </div>
        </form>
      </div>
    </Popup>
  );
});

export default AddCardPopup;
