import {handleAction, reduceReducers} from 'redux-ts-utils';
import {loadingChanged} from './actions';

export type State = {
  loading: boolean;
};

const initialState = {
  loading: false,
};

export const commonReducer = reduceReducers<State>([
  handleAction(loadingChanged, (state, {payload}) => {
    state.loading = payload;
  }),
], initialState);