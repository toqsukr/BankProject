import { FC } from 'react'
import { navData } from './nav.data'
import css from './nav.module.css'

const Nav:FC = () => {
  return (
    <nav id={css.navContainer}>
        {navData.map((el, index) => (
            <div  className={css.navElement} key={index}>
                <span>{el}</span>
            </div>
        ))}
    </nav>
  )
}

export default Nav