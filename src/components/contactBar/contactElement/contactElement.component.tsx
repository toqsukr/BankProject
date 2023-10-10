import { FC } from 'react';
import { IContact } from './contactElement.interface';
import css from './contactElement.module.css';

const ContactElement: FC<IContact> = ({ name, profileIconURL }) => {
  const shortName = name.indexOf(' ') === -1 ? name : name.slice(0, name.indexOf(' ') + 2);
  return (
    <div className={css.contactElementContainer}>
      <img className={css.contactIcon} src={profileIconURL} alt='' />
      <span>{shortName}</span>
    </div>
  );
};

export default ContactElement;
