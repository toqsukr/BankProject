import CardButton from '@components/ui/cardButton/cardButton.component'
import CardIcon from '@components/ui/icons/cardIcon.component'
import LockIcon from '@components/ui/icons/lockIcon.component'
import PinIcon from '@components/ui/icons/pinIcon.component'
import SettingIcon from '@components/ui/icons/settingIcon.component'
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
            <div id={css.cardContainer}>
                <div id={css.card}>
                    <div id={css.cardInnerContainer}>
                        <span id={css.cardOwner}>Elijahs Popuass</span>
                        <img src='/images/mastercard.png' className={css.cardInnerRightContianer} id={css.mastercard} />
                        <span id={css.cardNumber}>0000 0000 0000 0016</span>
                        <span className={css.cardInnerRightContianer} id={css.cardCVV}>CVV</span>
                    </div>
                </div>
            </div>
        </div>
        <div id={css.cardBarLowerContainer}>
            <div id={css.cardButtonContainer}>
                <CardButton title='Show Card Detail'>
                    <CardIcon/>
                </CardButton>
                <CardButton title='Your PIN'>
                    <PinIcon/>
                </CardButton>
                <CardButton title='Security Code'>
                    <LockIcon/>
                </CardButton>
                <CardButton title='Edit Limits'>
                    <SettingIcon/>
                </CardButton>
            </div>
            <div id={css.addRemoveButtonContainer}>
                
            </div>
        </div>
    </section>
  )
}

export default CardBar