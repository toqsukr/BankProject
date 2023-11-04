import { FC } from 'react';
import { IMessage, MessageIcons } from './message.interface';
import css from './message.module.css';

const Message: FC<IMessage> = ({ text, type }) => {
  const MessageIcon = MessageIcons[type];
  return (
    <aside className={css.messageContainer}>
      <MessageIcon />
      <span>{text}</span>
    </aside>
  );
};

export default Message;
