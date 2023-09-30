import CardButton from '@components/ui/cardButton/cardButton.component'
import { FC } from 'react'
import css from './cardBar.module.css'

const CardBar:FC = () => {
  return (
    <section id={css.cardBarSection}>
        <div id={css.cardBarUpperContainer} >
            <div id={css.cardBarHeader}>
                <span>Cards</span>
                <span>Show All</span>
            </div>
        </div>
        <div id={css.cardBarLowerContainer}>
            <div id={css.cardButtonContainer}>
                <CardButton title='Show Card Detail'></CardButton>
                <CardButton title='Your PIN'></CardButton>
                <CardButton title='Security Code'></CardButton>
                <CardButton title='Edit Limits'></CardButton>
            </div>
            <div id={css.addRemoveButtonContainer}>
                
            </div>
        </div>
    </section>
  )
}

export default CardBar