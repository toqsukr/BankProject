import { ICard } from '@store/cards/cards.interface';

export interface ICardRequest extends Omit<ICard, 'cardOwner'> {
  userPhone: string;
}
