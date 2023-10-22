import { bindActionCreators } from '@reduxjs/toolkit';
import * as cardActions from '@store/cards/cards.actions';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './useTypedSelector.hook';

export const useCard = () => {
  const dispatch = useDispatch();
  const cards = useTypedSelector(state => state.cards).cards;
  return {
    state: { defalutCard: !!cards ? cards[0] : null, ...useTypedSelector(state => state.cards) },
    actions: useMemo(() => bindActionCreators(cardActions, dispatch), [dispatch])
  };
};
