import { FC, PropsWithChildren } from 'react'
import { ICardButton } from './cardButton.interface'
import css from './cardButton.module.css'

const CardButton:FC<PropsWithChildren<ICardButton>> = ({ text, children, ...props}) => {
  return (
    <div {...props} className={css.buttonContainer}>
        <span>{text}</span>
        {children}
    </div>
  )
}

export default CardButton