import React, {FC, useCallback} from 'react';
import {useMappedState} from 'redux-react-hook';
import {selectLoading} from '../../data/common';
import {Spinner} from './Spinner';

export const SpinnerContainer: FC  = ({children}) => {
  const {loading} = useMappedState(useCallback(state => ({
    loading: selectLoading(state),
  }), []));

  return (
    <Spinner loading={loading}>
      {children}
    </Spinner>
  );
};