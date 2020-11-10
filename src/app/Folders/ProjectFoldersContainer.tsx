import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch, useMappedState} from 'redux-react-hook';
import {useParams} from 'react-router-dom';
import {Folders} from './Folders';
import {fetchFoldersFromProject, selectFoldersList} from '../../data/folders';
import {fetchAssetsFromProject, selectAssetsList} from '../../data/assets';

export const ProjectFoldersContainer: FC = () => {
  const dispatch = useDispatch();
  const {projectUuid} = useParams();

  const {folders, assets} = useMappedState(useCallback(state => ({
    folders: selectFoldersList(state),
    assets: selectAssetsList(state),
  }), []));

  useEffect(() => {
    dispatch(fetchFoldersFromProject(projectUuid));
    dispatch(fetchAssetsFromProject(projectUuid));
  }, []);

  const onFolderSelectCallback = useCallback((folderUuid: string) => {
    location.pathname = `${location.pathname}/${folderUuid}`;
  }, [])

  const onParentFolderSelectCallback = useCallback(() => {
    location.pathname = '/';
  }, []);

  return <Folders onFolderSelect={onFolderSelectCallback} onParentFolderSelect={onParentFolderSelectCallback} folders={folders}
                  assets={assets} />;
}
