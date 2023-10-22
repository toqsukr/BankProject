import { bindActionCreators } from '@reduxjs/toolkit';
import * as cardActions from '@store/cards/cards.actions';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './useTypedSelector.hook';

export const useCard = () => {
  const dispatch = useDispatch();

  return {
    state: useTypedSelector(state => state.cards),
    actions: useMemo(() => bindActionCreators(cardActions, dispatch), [dispatch])
  };
};
