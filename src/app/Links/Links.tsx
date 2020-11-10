import React from 'react';
import { Button, Icon, Table, Search, Dropdown } from 'semantic-ui-react';
import { Link } from '../../data/links/types';
import styles from './links.module.css';
import { LinkItem } from './components';

interface Props {
  links: Link[];
}

export const Links = ({ links }: Props) => (
  <div>
    <Table basic selectable singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="4" className={styles['links-th']}>Links</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Search defaultValue="Name, Action" />
          </Table.HeaderCell>
          <Table.HeaderCell colSpan="1">
            <Dropdown direction="left" trigger={(<Button color="grey" size="medium" className={styles.button}><Icon fitted name="ellipsis horizontal" /></Button>)} options={[{ key: 'sent-by-me', text: 'Sent By Me' }, { key: 'sent-by-others', text: 'Sent By Others' }, { key: 'expired', text: 'Expired' }]} pointing={false} icon={null} />
          </Table.HeaderCell>

        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Link Name</Table.HeaderCell>
          <Table.HeaderCell>Sent</Table.HeaderCell>
          <Table.HeaderCell>Last Activity</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {links.map((link, index) => (
          <LinkItem link={link} selected={index === 3} key={link.linkName} />
        ))}
      </Table.Body>
    </Table>
  </div>
);
