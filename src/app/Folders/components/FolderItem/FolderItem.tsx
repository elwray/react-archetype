import React, {FC, useCallback} from 'react';
import {List} from 'semantic-ui-react';

interface Props {
  folderId: string;
  name: string;
  onFolderSelect?(folderUuid: string): void;
}

export const FolderItem: FC<Props> = ({folderId, name, onFolderSelect}) => {
  const onClickCallback = useCallback(() => {
    if (onFolderSelect) {
      onFolderSelect(folderId);
    }
  }, [onFolderSelect, folderId]);

  return (
    <List.Item onClick={onClickCallback}>
      <List.Icon name='folder open' size='large' verticalAlign='middle'/>
      <List.Content>
        <List.Header as='a'>{name}</List.Header>
      </List.Content>
    </List.Item>
  );
};