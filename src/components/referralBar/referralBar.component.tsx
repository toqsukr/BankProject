import BarLayout from '@components/layouts/barLayout/barLayout.component';
import CopyIcon from '@components/ui/icons/copyIcon.component';
import { useRefferalLink } from '@hooks/useReferralLink.hook';
import { FC } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { referralData } from './referralBar.data';
import css from './referralBar.module.css';

const ReferralBar: FC = () => {
  const { generateReferralLink } = useRefferalLink();
  const clipboard = useClipboard();
  return (
    <BarLayout id={css.referralLayout}>
      <div id={css.referralBody}>
        <span id={css.referralText}>{referralData.linkText}</span>
        <div id={css.linkContainer}>
          <span>{generateReferralLink()}</span>
          <span onClick={() => clipboard.copy(generateReferralLink())} id={css.copyIcon}>
            <CopyIcon />
          </span>
        </div>
      </div>
    </BarLayout>
  );
};

export default ReferralBar;
