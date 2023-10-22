export interface ICard {
  cardNumber: string;
  expires: string;
  code: number;
}

export interface ICardInitialState {
  cards: ICard[];
  isLoading: boolean;
}
