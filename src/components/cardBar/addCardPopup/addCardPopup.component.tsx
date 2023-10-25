import Button from '@components/ui/button/button.component';
import Card from '@components/ui/card/card.component';
import Input from '@components/ui/input/input.component';
import Popup from '@components/ui/popup/popup.component';
import { useAuth } from '@hooks/useAuth.hook';
import { useCard } from '@hooks/useCard.hook';
import { IShow } from '@interfaces/component.interface';
import { ICard } from '@store/cards/cards.interface';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  cardNumberInputSetting,
  cardNumberValidation,
  codeInputSetting,
  codeValidation,
  expiresInputSetting,
  expiresValidation
} from './addCard.validation';
import { defaultCardData } from './addCardPopup.data';
import css from './addCardPopup.module.css';

const AddCardPopup = forwardRef<HTMLDivElement, IShow>((popupProps, ref) => {
  const { handleSubmit, watch, register, setValue } = useForm<ICard>();

  const {
    state: { user }
  } = useAuth();

  const {
    actions: { appendCard }
  } = useCard();

  const onSubmit: SubmitHandler<ICard> = async ({ cardOwner, ...data }) => {
    const userPhone = user?.phone;
    if (userPhone) appendCard({ userPhone, ...data });
  };

  const cardNumber = watch('cardNumber', '');
  const expires = watch('expires', '');

  return (
    <Popup {...popupProps}>
      <div
        ref={ref}
        className={classNames({ [css.addContainer]: true, [css.addContainerShow]: popupProps.show })}
      >
        <Card
          cardNumber={cardNumber || defaultCardData.cardNumber}
          cardOwner={`${user?.name} ${user?.surname}`.toUpperCase()}
          expires={expires || defaultCardData.expires}
        />
        <form id={css.addCardForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputsContainer}>
            <Input value={`${user?.name} ${user?.surname}`.toUpperCase()} disabled />
            <Input
              {...register('expires', {
                ...expiresInputSetting,
                required: true,
                onChange: () => setValue('expires', expiresValidation(watch('expires')))
              })}
              placeholder='Expires'
              type='tel'
            />
            <Input
              {...register('cardNumber', {
                ...cardNumberInputSetting,
                required: true,
                onChange: () => setValue('cardNumber', cardNumberValidation(watch('cardNumber')))
              })}
              placeholder='Card number'
              type='tel'
            />
            <Input
              {...register('code', {
                ...codeInputSetting,
                required: true,
                onChange: () => setValue('code', codeValidation(watch('code')))
              })}
              placeholder='Code'
              type='password'
            />
          </div>
          <div className={css.buttonContainer}>
            <Button type='submit' color='purple' text='Submit' />
            <Button type='button' color='white' text='Cancel' onClick={() => popupProps.setShow(false)} />
          </div>
        </form>
      </div>
    </Popup>
  );
});

export default AddCardPopup;
