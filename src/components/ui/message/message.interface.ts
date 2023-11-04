import { FC, HTMLAttributes, SVGAttributes } from 'react';
import DangerIcon from '../icons/dangerIcon.component';
import InfoIcon from '../icons/infoIcon.component';
import SuccessIcon from '../icons/successIcon.component';
import WarningIcon from '../icons/warningIcon.component';

export interface IMessage extends HTMLAttributes<HTMLDivElement> {
  text: string;
  type: MessageTypes;
}

export enum MessageTypes {
  INFO,
  SUCCESS,
  WARNING,
  DANGER
}

export const MessageIcons: Record<MessageTypes, FC<SVGAttributes<HTMLOrSVGElement>>> = {
  [MessageTypes.INFO]: InfoIcon,
  [MessageTypes.SUCCESS]: SuccessIcon,
  [MessageTypes.WARNING]: WarningIcon,
  [MessageTypes.DANGER]: DangerIcon
};
