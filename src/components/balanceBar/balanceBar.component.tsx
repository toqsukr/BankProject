import BarLayout from '@components/layouts/barLayout/barLayout.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import Button from '@components/ui/button/button.component';
import PlusIcon from '@components/ui/icons/plusIcon/plusIcon.component';
import { FC } from 'react';
import { balanceHeaderData } from './balanceBar.data';
import css from './balanceBar.module.css';

const BalanceBar: FC = () => {
  return (
    <div id={css.mainContainer}>
      <BarLayout>
        <SectionHeader {...balanceHeaderData} />
        <div id={css.buttonContainer}>
          <Button text='Send'></Button>
          <Button text='Request'></Button>
          <Button text='Top Up'>
            <PlusIcon />
          </Button>
        </div>
      </BarLayout>
      <div></div>
    </div>
  );
};

export default BalanceBar;
