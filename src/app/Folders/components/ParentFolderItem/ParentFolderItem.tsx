import React, {FC, useCallback} from 'react';
import {List} from 'semantic-ui-react';

interface Props {
  onClick?(): void;
}

export const ParentFolderItem: FC<Props> = ({onClick}) => {
  const onClickCallback = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <List.Item onClick={onClickCallback}>
      <List.Icon name='angle up' size='large' verticalAlign='middle'/>
      <List.Content>
        <List.Header as='a'>...</List.Header>
      </List.Content>
    </List.Item>
  );
};