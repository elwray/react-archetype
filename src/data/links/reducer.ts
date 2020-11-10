/* eslint-disable no-param-reassign */
import {handleAction, reduceReducers} from 'redux-ts-utils';
import {keyBy} from 'lodash';
import * as actions from './actions';
import {Link} from './types';

export type State = {
  data: { [id: string]: Link };
};

export const defaultState = {
  data: {},
};

export const linksReducer = reduceReducers<State>([
  handleAction(actions.fetchLinksSuccess, (state, {payload}) => {
    state.data = keyBy(payload as Link[], 'sentDate');
  }),
], defaultState);
