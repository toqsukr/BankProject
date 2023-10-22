import { bindActionCreators } from '@reduxjs/toolkit';
import * as contactActions from '@store/contacts/contacts.actions';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './useTypedSelector.hook';

export const useContact = () => {
  const dispatch = useDispatch();

  return {
    state: useTypedSelector(state => state.contacts),
    actions: useMemo(() => bindActionCreators(contactActions, dispatch), [dispatch])
  };
};
