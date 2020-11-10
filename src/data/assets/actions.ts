import {createAsyncActions} from 'redux-ts-utils';
import {noop} from 'lodash';
import {Asset} from './types';
import {AppThunk} from 'src/types';
import {getAssets, getAssetsInProject} from '../../api';
import {loadingChanged} from '../common';

export const fetchAssetsFromProject = (projectUuid: string): AppThunk => async dispatch => {
  try {
    dispatch(fetchAssetsFromProjectStarted());
    dispatch(loadingChanged(true));
    const response = await getAssetsInProject(projectUuid);
    dispatch(loadingChanged(false));
    dispatch(fetchAssetsFromProjectSuccess(response));
  } catch (e) {
    dispatch(fetchAssetsFromProjectFailure(e));
  }
}

export const [
  fetchAssetsFromProjectStarted,
  fetchAssetsFromProjectSuccess,
  fetchAssetsFromProjectFailure,
] = createAsyncActions('PROJECT_ASSETS_REQUEST', noop, (assets: Asset[]) => assets);

export const fetchAssetsFromFolder = (folderUuid: string): AppThunk => async dispatch => {
  try {
    dispatch(fetchAssetsStarted());
    dispatch(loadingChanged(true));
    const response = await getAssets(folderUuid);
    dispatch(loadingChanged(false));
    dispatch(fetchAssetsSuccess(response));
  } catch (e) {
    dispatch(fetchAssetsFailure(e));
  }
};

/**
 * Our action creators. These are exported and should be used through the app.
 */
export const [
  fetchAssetsStarted,
  fetchAssetsSuccess,
  fetchAssetsFailure,
] = createAsyncActions('ASSETS_REQUEST', noop, (assets: Asset[]) => assets);

export const [
  fetchAsset,
  fetchAssetSuccess,
  fetchAssetFailure,
] = createAsyncActions('ASSET_REQUEST', (id: string) => id, (asset: Asset) => asset);
