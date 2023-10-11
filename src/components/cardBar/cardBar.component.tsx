import BarLayout from '@components/layouts/barLayout/barLayout.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import Button from '@components/ui/button/button.component';
import CardInfoElement from '@components/ui/cardInfoElement/cardInfoElement.component';
import CardIcon from '@components/ui/icons/cardIcon.component';
import LockIcon from '@components/ui/icons/lockIcon.component';
import MinusIcon from '@components/ui/icons/minusIcon.component';
import PinIcon from '@components/ui/icons/pinIcon.component';
import PlusIcon from '@components/ui/icons/plusIcon.component';
import SettingIcon from '@components/ui/icons/settingIcon.component';
import { FC } from 'react';
import Card from './card/card.component';
import { cardHeaderData } from './cardBar.data';
import css from './cardBar.module.css';

const CardBar: FC = () => {
  return (
    <BarLayout id={css.cardLayout}>
      <div id={css.cardBarSection}>
        <div id={css.cardBarUpperContainer}>
          <SectionHeader {...cardHeaderData} />
          <Card />
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
            <Button color='purple' text='Add Card' icon={PlusIcon} />
            <Button color='pink' text='Remove' icon={MinusIcon} />
          </div>
        </div>
      </div>
    </BarLayout>
  );
};

export default CardBar;
