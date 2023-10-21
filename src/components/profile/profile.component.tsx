import { getFromLocalStorage } from '@services/auth/auth.helper';
import { IUser } from '@services/auth/auth.interface';
import { FC } from 'react';
import css from './profile.module.css';

const Profile: FC = () => {
  const user: IUser = getFromLocalStorage('bank-project-user');
  return (
    <div id={css.profileContainer}>
      <div id={css.textContainer}>
        <span>Welcome back, </span>
        <span>{user.name}!</span>
      </div>
      <img id={css.profileIcon} src='/images/profile_photo.jpg' alt='' />
    </div>
  );
};

export default Profile;
