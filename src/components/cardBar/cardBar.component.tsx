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
import InactiveElement from '@components/ui/inactiveElement/inactiveElement.component';
import { useAuth } from '@hooks/useAuth.hook';
import { useCard } from '@hooks/useCard.hook';
import { useOutside } from '@hooks/useOutside.hook';
import { FC, useEffect } from 'react';
import AddCardPopup from './addCardPopup/addCardPopup.component';
import Card from './card/card.component';
import { cardHeaderData } from './cardBar.data';
import css from './cardBar.module.css';
import CardNotFound from './cardNotFound/cardNotFound.component';

const CardBar: FC = () => {
  const popupProps = useOutside(false);

  const {
    state: { defalutCard },
    actions: { getCards }
  } = useCard();

  const {
    state: { user }
  } = useAuth();

  useEffect(() => {
    user && getCards(user.phone);
  }, []);
  return (
    <BarLayout id={css.cardLayout}>
      <div id={css.cardBarSection}>
        <div id={css.cardBarUpperContainer}>
          <SectionHeader {...cardHeaderData} />
          {defalutCard ? <Card /> : <CardNotFound />}
        </div>
        <div id={css.cardBarLowerContainer}>
          <div id={css.cardInfoElementContainer}>
            <CardInfoElement title='Show Card Detail' icon={CardIcon} />
            <CardInfoElement title='Your PIN' icon={PinIcon} />
            <CardInfoElement title='Security Code' icon={LockIcon} />
            <CardInfoElement title='Edit Limits' icon={SettingIcon} />
          </div>
          <div id={css.cardButtonContainer}>
            <Button onClick={() => popupProps.setShow(true)} color='purple' text='Add Card' icon={PlusIcon} />
            {!!defalutCard ? <Button color='pink' text='Remove' icon={MinusIcon} /> : <InactiveElement />}
          </div>
        </div>
      </div>
      <AddCardPopup {...popupProps} />
    </BarLayout>
  );
};

export default CardBar;
