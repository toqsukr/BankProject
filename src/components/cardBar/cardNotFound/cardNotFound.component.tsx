import { FC } from 'react';
import css from './cardNotFound.module.css';
const CardNotFound: FC = () => {
  return (
    <div id={css.cardNotFoundContainer}>
      <p>
        No card avaliable.
        <br />
        <br />
        Add it right now!
      </p>
    </div>
  );
};

export default CardNotFound;
