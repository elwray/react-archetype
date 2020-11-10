import React from 'react';
import { Button, Icon, Table, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from '../../../../data/links/types';

interface Props {
  link: Link;
  selected: boolean;
}

const LinkName = styled(Table.Cell)`
  border-left: ${({ selected }) => selected && '2px solid #259cf3'};
`;

export const LinkItem = ({ link, selected }: Props) => {
  const options = [
    { key: 'copy-link', text: 'Copy Links' },
    { key: 'edit', text: 'Edit' },
    { key: 'expire', text: 'Expire' },
    { key: 'open', text: 'Open' },
    { key: 'export-comments', text: 'Export Comments' },
  ];
  return (
    <Table.Row onClick={() => { console.log('Foo'); }}>
      <LinkName selected={selected}>{link.linkName}</LinkName>
      <Table.Cell>{link.sentDate}</Table.Cell>
      <Table.Cell>{link.lastActivity}</Table.Cell>
      <Table.Cell>
        <Dropdown
          direction="left"
          trigger={(
            <Button compact basic color="grey" size="small">
              <Icon fitted name="ellipsis horizontal" />
            </Button>
        )}
          options={options}
          pointing={false}
          icon={null}
        />
      </Table.Cell>
    </Table.Row>
  );
};
