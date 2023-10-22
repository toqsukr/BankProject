import { useAuth } from '@hooks/useAuth.hook';
import { FC } from 'react';
import css from './profile.module.css';

const Profile: FC = () => {
  const {
    state: { user }
  } = useAuth();
  return (
    <div id={css.profileContainer}>
      <div id={css.textContainer}>
        <span>Welcome back, </span>
        <span>{user?.name}!</span>
      </div>
      <img id={css.profileIcon} src={user?.image ? user.image : '/images/profile_photo_default.png'} alt='' />
    </div>
  );
};

export default Profile;
