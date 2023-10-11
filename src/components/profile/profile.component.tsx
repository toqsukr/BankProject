import { FC } from 'react';
import css from './profile.module.css';

const Profile: FC = () => {
  return (
    <div id={css.profileContainer}>
      <div id={css.textContainer}>
        <span>Welcome back, </span>
        <span>Elijahs!</span>
      </div>
      <img id={css.profileIcon} src='/images/profile_photo.jpg' alt='' />
    </div>
  );
};

export default Profile;
