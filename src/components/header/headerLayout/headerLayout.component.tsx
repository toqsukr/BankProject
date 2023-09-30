import { FC, PropsWithChildren } from 'react'
import css from './headerlayout.module.css'

const HeaderLayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <header className={css.headerContainer}>{children}</header>
  )
}

export default HeaderLayout