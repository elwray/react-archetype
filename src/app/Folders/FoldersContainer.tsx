import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch, useMappedState} from 'redux-react-hook';
import {useParams} from 'react-router-dom';
import {Folders} from './Folders';
import {fetchFolder, fetchFoldersFromFolder, selectFoldersList, selectFolderParentId} from '../../data/folders';
import {fetchAssetsFromFolder, selectAssetsList} from '../../data/assets';

export const FoldersContainer: FC = () => {
  const dispatch = useDispatch();
  const {projectUuid, folderUuid} = useParams();

  const {folders, assets, parentId} = useMappedState(useCallback(state => ({
    folders: selectFoldersList(state),
    assets: selectAssetsList(state),
    parentId: selectFolderParentId(state)
  }), [dispatch]));

  useEffect(() => {
    dispatch(fetchFoldersFromFolder(folderUuid));
    dispatch(fetchAssetsFromFolder(folderUuid));
    dispatch(fetchFolder(folderUuid));
  }, [folderUuid]);

  const onFolderSelectCallback = useCallback((folderUuid: string) => {
    location.pathname = `${projectUuid}/${folderUuid}`;
  }, [projectUuid]);

  const onParentFolderSelectCallback = useCallback(() => {
    const navigateTo = parentId ? `${projectUuid}/${parentId}` : projectUuid;
    location.pathname = navigateTo
  }, [parentId]);

  return <Folders folders={folders} assets={assets} onFolderSelect={onFolderSelectCallback}
                  onParentFolderSelect={onParentFolderSelectCallback} />;
}
