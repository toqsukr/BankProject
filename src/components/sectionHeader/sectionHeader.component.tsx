import { FC } from 'react';
import { ISectionHeader } from './sectionHeader.interface';
import css from './sectionHeader.module.css';

const SectionHeader: FC<ISectionHeader> = ({ title, otherText }) => {
  return (
    <div className={css.headerContainer}>
      <span className={css.title}>{title}</span>
      {otherText && <span className={css.otherText}>{otherText}</span>}
    </div>
  );
};

export default SectionHeader;
