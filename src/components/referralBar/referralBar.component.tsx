import BarLayout from '@components/layouts/barLayout/barLayout.component';
import CopyIcon from '@components/ui/icons/copyIcon.component';
import { useAuth } from '@hooks/useAuth.hook';
import { FC } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { referralData } from './referralBar.data';
import css from './referralBar.module.css';

const ReferralBar: FC = () => {
  const { user } = useAuth();
  const clipboard = useClipboard();
  return (
    <BarLayout id={css.referralLayout}>
      <div id={css.referralBody}>
        <span id={css.referralText}>{referralData.linkText}</span>
        <div id={css.linkContainer}>
          <span>{`${user?.name.toUpperCase()}${user?.surname.toUpperCase()}-OCT2023`}</span>
          <span
            onClick={() =>
              clipboard.copy(`${user?.name.toUpperCase()}${user?.surname.toUpperCase()}-OCT2023`)
            }
            id={css.copyIcon}
          >
            <CopyIcon />
          </span>
        </div>
      </div>
    </BarLayout>
  );
};

export default ReferralBar;
