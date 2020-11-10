import { createSelector } from 'reselect';
import { RootState } from '../reducer';

const selectAssets = (state: RootState) =>
  state.assets.data;

export const selectAsset = (id: string) => createSelector(
  selectAssets,
  assets => assets[id],
);

export const selectAssetsList = createSelector(
  selectAssets,
  assets => Object.values(assets),
);
