import {handleAction, reduceReducers} from 'redux-ts-utils';
import * as actions from './actions';
import {Folder} from './types';
import {keyBy} from 'lodash';

export type State = {
  data: { [id: string]: Folder },
  parentFolderId?: string;
};

const initialState = {
  data: {},
};

export const foldersReducer = reduceReducers<State>([
  handleAction(actions.fetchFoldersFromProjectSuccess, (state, {payload}) => {
    state.data = keyBy(payload as Folder[], 'id');
  }),

  handleAction(actions.fetchFoldersFromFolderSuccess, (state, {payload}) => {
    state.data = keyBy(payload as Folder[], 'id');
  }),

  handleAction(actions.fetchFolderSuccess, (state, {payload}) => {
    state.parentFolderId = payload.parentId;
  })
], initialState);