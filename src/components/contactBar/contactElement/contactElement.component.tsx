import { IContact } from '@store/contacts/contacts.interface';
import { FC } from 'react';
import css from './contactElement.module.css';

const ContactElement: FC<IContact> = ({ name, surname, image }) => {
  const shortName = name + ' ' + surname[0];
  return (
    <div className={css.contactElementContainer}>
      <img className={css.contactIcon} src={image || '/images/profile_photo_default.png'} alt='' />
      <span>{shortName}</span>
    </div>
  );
};

export default ContactElement;
