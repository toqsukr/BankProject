export interface ICard {
  cardNumber: string;
  expires: string;
  code: number;
  cardOwner: string;
}

export interface ICardInitialState {
  cards: ICard[];
  isLoading: boolean;
}
