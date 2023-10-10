import { FC } from 'react';
import { IContact } from './contactElement.interface';
import css from './contactElement.module.css';

const ContactElement: FC<IContact> = ({ name, profileIconURL }) => {
  return (
    <div className={css.contactElementContainer}>
      <img src={profileIconURL} alt='' />
      <span>{name}</span>
    </div>
  );
};

export default ContactElement;
