import { HTMLAttributes } from 'react';

export interface ISectionHeader extends HTMLAttributes<HTMLDivElement> {
  title: string;
  otherText?: string;
}
