import {createSelector} from 'reselect';
import {RootState} from '../reducer';
import {Folder} from 'src/data/folders/types';

const selectFolders = ({folders}: RootState) => folders;

export const selectFoldersList = createSelector(
  selectFolders,
  ({data}) => Object.values(data) as Folder[],
);

export const selectFolder = (id: string) => createSelector(
  selectFolders,
  folders => folders[id],
);

export const selectFolderParentId = createSelector(
  selectFolders,
  ({parentFolderId}) => parentFolderId
);