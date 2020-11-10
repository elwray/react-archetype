import React, {FC} from 'react';
import {List} from 'semantic-ui-react';

interface Props {
  title: string;
  description: string;
  fileName: string;
}

export const AssetItem: FC<Props> = ({title, description, fileName}) => (
  <List.Item>
    <List.Icon name='file' size='large' verticalAlign='middle'/>
    <List.Content>
      <List.Header as='a'>{fileName} ({title})</List.Header>
      <List.Description as='a'>{description}</List.Description>
    </List.Content>
  </List.Item>
);