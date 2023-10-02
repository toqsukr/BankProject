import { FC, PropsWithChildren } from 'react'
import ArrowIcon from '../icons/arrowIcon.component'
import { ICardInfoElement } from './cardInfoElement.interface'
import css from './cardInfoElement.module.css'

const CardInfoElement:FC<PropsWithChildren<ICardInfoElement>> = ({title, children}) => {
  return (
    <div className={css.cardInfoElementContainer}>
        <div className={css.cardInfoElementInfoContainer}>
            {children}
            <span>{title}</span>
        </div>
        <ArrowIcon className={css.icon}/>
    </div>
  )
}

export default CardInfoElement