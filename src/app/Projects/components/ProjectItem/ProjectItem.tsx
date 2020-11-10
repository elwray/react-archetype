import React, {FC, useCallback} from 'react';
import {List} from 'semantic-ui-react';

interface Props {
  id: string;
  name: string;
  description: string;
  onProjectSelect?(projectUuid: string): void;
}

export const ProjectItem: FC<Props> = ({id, name, description, onProjectSelect}) => {
  const onClickCallback = useCallback(() => {
    if (onProjectSelect) {
      onProjectSelect(id);
    }
  }, [id, onProjectSelect]);

  return (
    <List.Item onClick={onClickCallback}>
      <List.Icon name='folder' size='large' verticalAlign='middle'/>
      <List.Content>
        <List.Header as='a'>{name}</List.Header>
        <List.Description as='a'>{description}</List.Description>
      </List.Content>
    </List.Item>
  );
};