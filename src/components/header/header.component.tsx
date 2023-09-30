import Profile from '@components/profile/profile.component'
import LogoIcon from '@components/ui/icons/logoIcon.component'
import { FC } from 'react'
import css from './header.module.css'
import HeaderLayout from './headerLayout/headerLayout.component'
import Nav from './nav/nav.component'

const Header:FC = () => {
  return (
    <HeaderLayout>
        <div id={css.headerContainer}>
            <LogoIcon id={css.logo} />
            <Profile/>
            <Nav/>
        </div>
    </HeaderLayout>
  )
}

export default Header