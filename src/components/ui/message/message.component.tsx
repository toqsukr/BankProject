import { FC } from 'react';
import { IMessage } from './message.interface';

const Message: FC<IMessage> = ({ text, type }) => {
  return (
    <aside>
      <span>{text}</span>
    </aside>
  );
};

export default Message;
