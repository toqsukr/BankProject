import BarLayout from '@components/layouts/barLayout/barLayout.component';
import ReferralBar from '@components/referralBar/referralBar.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import Button from '@components/ui/button/button.component';
import ArrowBottomIcon from '@components/ui/icons/arrowBottomIcon.component';
import ArrowUpIcon from '@components/ui/icons/arrowUpIcon.component';
import PlusIcon from '@components/ui/icons/plusIcon.component';
import { useAuth } from '@hooks/useAuth.hook';
import { FC } from 'react';
import { balanceHeaderData } from './balanceBar.data';
import css from './balanceBar.module.css';

const BalanceBar: FC = () => {
  const { user } = useAuth();
  return (
    <div id={css.mainContainer}>
      <BarLayout id={css.balanceLayout}>
        <SectionHeader {...balanceHeaderData} />
        <div id={css.total}>
          <span id={css.totalSum}>{user?.balance}</span>
          <span id={css.totalValute}>USD</span>
        </div>
        <div id={css.buttonContainer}>
          <Button color='purple' text='Send' icon={ArrowUpIcon}></Button>
          <Button color='white' text='Request' icon={ArrowBottomIcon}></Button>
          <Button color='white' text='Top Up' icon={PlusIcon}></Button>
        </div>
      </BarLayout>
      <ReferralBar />
    </div>
  );
};

export default BalanceBar;
