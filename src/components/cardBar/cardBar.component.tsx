import BarLayout from '@components/layouts/barLayout/barLayout.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import Button from '@components/ui/button/button.component';
import CardInfoElement from '@components/ui/cardInfoElement/cardInfoElement.component';
import CardIcon from '@components/ui/icons/cardIcon.component';
import LockIcon from '@components/ui/icons/lockIcon.component';
import MinusIcon from '@components/ui/icons/minusIcon/minusIcon.component';
import PinIcon from '@components/ui/icons/pinIcon.component';
import PlusIcon from '@components/ui/icons/plusIcon/plusIcon.component';
import SettingIcon from '@components/ui/icons/settingIcon.component';
import { FC } from 'react';
import { cardHeaderData } from './cardBar.data';
import css from './cardBar.module.css';

const CardBar: FC = () => {
  return (
    <BarLayout>
      <div id={css.cardBarSection}>
        <div id={css.cardBarUpperContainer}>
          <SectionHeader {...cardHeaderData} />
          <div id={css.cardContainer}>
            <div id={css.card}>
              <div id={css.cardInnerContainer}>
                <span id={css.cardOwner}>Elijahs Popuass</span>
                <img
                  src='/images/mastercard.png'
                  className={css.cardInnerRightContianer}
                  id={css.mastercard}
                />
                <span id={css.cardNumber}>0000 0000 0000 0016</span>
                <span className={css.cardInnerRightContianer} id={css.cardCVV}>
                  CVV
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id={css.cardBarLowerContainer}>
          <div id={css.cardInfoElementContainer}>
            <CardInfoElement title='Show Card Detail'>
              <CardIcon />
            </CardInfoElement>
            <CardInfoElement title='Your PIN'>
              <PinIcon />
            </CardInfoElement>
            <CardInfoElement title='Security Code'>
              <LockIcon />
            </CardInfoElement>
            <CardInfoElement title='Edit Limits'>
              <SettingIcon />
            </CardInfoElement>
          </div>
          <div id={css.cardButtonContainer}>
            <Button id={css.addButton} text='Add Card'>
              <PlusIcon />
            </Button>
            <Button id={css.removeButton} text='Remove'>
              <MinusIcon />
            </Button>
          </div>
        </div>
      </div>
    </BarLayout>
  );
};

export default CardBar;
