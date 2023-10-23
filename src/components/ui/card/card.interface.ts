import { ICard } from '@store/cards/cards.interface';

export interface ICardComponent extends Omit<ICard, 'code'> {}
