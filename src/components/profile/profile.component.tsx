import { FC } from 'react'
import css from './profile.module.css'

const Profile:FC = () => {
  return (
    <div id={css.profileContainer}>
        <span id={css.profileText}>Welcome back, Elijahs!</span>
        <img id={css.profileIcon} src="/images/profile_photo.jpg" alt="" />
    </div>
  )
}

export default Profile