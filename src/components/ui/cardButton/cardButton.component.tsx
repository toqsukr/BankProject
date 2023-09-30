import { FC, PropsWithChildren } from 'react'
import ArrowIcon from '../icons/arrowIcon.component'
import { ICardButton } from './cardButton.interface'
import css from './cardButton.module.css'

const CardButton:FC<PropsWithChildren<ICardButton>> = ({title, children}) => {
  return (
    <div className={css.cardButtonContainer}>
        <div className={css.cardButtonInfoContainer}>
            {children}
            <span>{title}</span>
        </div>
        <ArrowIcon className={css.icon}/>
    </div>
  )
}

export default CardButton