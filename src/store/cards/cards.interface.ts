export interface ICard {
  cardNumber: string;
  expires: string;
  code: string;
  cardOwner: string;
}

export interface ICardInitialState {
  cards: ICard[];
  isLoading: boolean;
}
