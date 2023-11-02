import { HTMLAttributes } from 'react';

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
