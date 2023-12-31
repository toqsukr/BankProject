import { bindActionCreators } from '@reduxjs/toolkit';
import * as userActions from '@store/user/user.actions';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './useTypedSelector.hook';

export const useAuth = () => {
  const dispatch = useDispatch();

  return {
    state: useTypedSelector(state => state.user),
    actions: useMemo(() => bindActionCreators(userActions, dispatch), [dispatch])
  };
};
