import {handleAction, reduceReducers} from 'redux-ts-utils';
import * as actions from './actions';
import {Project} from './types';
import {keyBy} from 'lodash';

export type State = {
  data: {[id: string]: Project},
};

const initialState = {
  data: {},
};

export const projectsReducer = reduceReducers<State>([
  handleAction(actions.fetchProjectsSuccess, (state, {payload}) => {
    state.data = keyBy(payload as Project[], 'id');
  }),
], initialState);