import {createSelector} from 'reselect';
import {RootState} from '../reducer';

const selectCommon = ({ common }: RootState) => common;

export const selectLoading = createSelector(
  selectCommon,
  ({ loading }) => loading,
);