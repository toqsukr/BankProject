import BarLayout from '@components/layouts/barLayout/barLayout.component';
import CopyIcon from '@components/ui/icons/copyIcon.component';
import { FC } from 'react';
import { referralData } from './referralBar.data';
import css from './referralBar.module.css';

const ReferralBar: FC = () => {
  return (
    <BarLayout id={css.referralLayout}>
      <div id={css.referralBody}>
        <span id={css.referralText}>{referralData.linkText}</span>
        <div id={css.linkContainer}>
          <span>{referralData.code}</span>
          <span id={css.copyIcon}>
            <CopyIcon />
          </span>
        </div>
      </div>
    </BarLayout>
  );
};

export default ReferralBar;
