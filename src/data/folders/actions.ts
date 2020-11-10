import {createAsyncActions} from 'redux-ts-utils';
import {noop} from 'lodash';
import {Folder} from './types';
import {AppThunk} from 'src/types';
import {getSubfolders, getFoldersInProject, getFolder} from '../../api';
import {loadingChanged} from '../common';

export const fetchFoldersFromProject = (projectUuid: string): AppThunk => async dispatch => {
  try {
    dispatch(fetchFoldersFromProjectStarted());
    dispatch(loadingChanged(true));
    const response = await getFoldersInProject(projectUuid);
    dispatch(loadingChanged(false));
    dispatch(fetchFoldersFromProjectSuccess(response));
  } catch (e) {
    dispatch(fetchFoldersFromProjectFailure(e));
  }
};

export const [
  fetchFoldersFromProjectStarted,
  fetchFoldersFromProjectSuccess,
  fetchFoldersFromProjectFailure
] = createAsyncActions('PROJECT_FOLDERS_REQUEST', noop, (folders: Folder[]) => folders);

export const fetchFoldersFromFolder = (folderUuid: string): AppThunk => async dispatch => {
  try {
    dispatch(fetchFoldersFromFolderStarted());
    dispatch(loadingChanged(true));
    const response = await getSubfolders(folderUuid);
    dispatch(loadingChanged(false));
    dispatch(fetchFoldersFromFolderSuccess(response));
  } catch (e) {
    dispatch(fetchFoldersFromFolderFailure(e));
  }
}

export const [
  fetchFoldersFromFolderStarted,
  fetchFoldersFromFolderSuccess,
  fetchFoldersFromFolderFailure
] = createAsyncActions('FOLDERS_REQUEST', noop, (folders: Folder[]) => folders);

export const fetchFolder = (folderUuid: string): AppThunk => async dispatch => {
  try {
    dispatch(fetchFolderStarted());
    dispatch(loadingChanged(true));
    const response = await getFolder(folderUuid);
    dispatch(loadingChanged(false));
    dispatch(fetchFolderSuccess(response));
  } catch (e) {
    dispatch(fetchFolderFailure(e));
  }
}

export const [
  fetchFolderStarted,
  fetchFolderSuccess,
  fetchFolderFailure,
] = createAsyncActions('FOLDER_REQUEST', noop, (folder: Folder) => folder);