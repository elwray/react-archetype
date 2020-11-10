import React, {FC} from 'react';
import {Table} from 'semantic-ui-react';
import styles from './Info.module.css';
import {Details} from './components';

export const Info: FC = () => (
  <div className={styles.container}>

    <Table basic selectable={false} singleLine className={styles.table}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="4" className={styles['links-th']}>Info</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row onClick={() => {
          console.log('Foo');
        }}>
          <Table.Cell className={styles.cell}>
            <Details/>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

  </div>
);
