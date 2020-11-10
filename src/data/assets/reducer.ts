/* eslint-disable no-param-reassign */
import {handleAction, reduceReducers} from 'redux-ts-utils';
import {keyBy} from 'lodash';
import {Asset} from './types';
import * as actions from './actions';

export type State = {
  loading: boolean;
  data: { [id: string]: Asset };
  patches: { [id: string]: Partial<Asset> };
  inFlight: { [id: string]: number };
  topInFlight: boolean;
};

const initialState = {
  loading: false,
  data: {},
  patches: {},
  inFlight: {},
  topInFlight: false,
};

export const assetsReducer = reduceReducers<State>([
  handleAction(actions.fetchAssetsStarted, (state) => {
    state.topInFlight = true;
  }),

  handleAction(actions.fetchAssetsSuccess, (state, {payload}) => {
    state.data = keyBy(payload, 'id');
    state.topInFlight = false;
  }),

  handleAction(actions.fetchAsset, (state, {payload}) => {
    if (!state.inFlight[payload]) {
      state.inFlight[payload] = 0;
    }
    state.inFlight[payload] += 1;
  }),

  handleAction(actions.fetchAssetSuccess, (state, {payload}) => {
    state.data[payload.id] = payload;
    state.inFlight[payload.id] -= 1;
  }),
], initialState);
