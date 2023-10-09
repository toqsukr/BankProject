import BarLayout from '@components/layouts/barLayout/barLayout.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import Button from '@components/ui/button/button.component';
import ArrowBottomIcon from '@components/ui/icons/arrowBottomIcon.component';
import ArrowUpIcon from '@components/ui/icons/arrowUpIcon.component';
import PlusIcon from '@components/ui/icons/plusIcon.component';
import { FC } from 'react';
import { balanceHeaderData } from './balanceBar.data';
import css from './balanceBar.module.css';

const BalanceBar: FC = () => {
  return (
    <div id={css.mainContainer}>
      <BarLayout id={css.balanceLayout}>
        <SectionHeader {...balanceHeaderData} />
        <span>29,475.00</span>
        <div id={css.buttonContainer}>
          <Button color='purple' text='Send' icon={ArrowUpIcon}></Button>
          <Button color='white' text='Request' icon={ArrowBottomIcon}></Button>
          <Button color='white' text='Top Up' icon={PlusIcon}></Button>
        </div>
      </BarLayout>
      <div></div>
    </div>
  );
};

export default BalanceBar;
