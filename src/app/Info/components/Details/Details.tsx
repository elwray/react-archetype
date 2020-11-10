import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Image, Header, Table, Statistic } from 'semantic-ui-react';
import faker from 'faker';
import styles from './info.module.css';

export const Details = () => (
  <div className={styles.data}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyA09nGyRDYbHD8_BUCmPpCWbeCpXRAclng' }}
      defaultCenter={{
        lat: 40.71,
        lng: -95.00,
      }}
      style={{ width: '100%', height: 250, position: 'relative' }}
      defaultZoom={4}
    />
    <Image className={styles.user} src={faker.image.avatar()} size="small" circular />
    <Header as="h4" disabled>Sent By</Header>
    <Header className={styles['low-bridge']} as="h3">{faker.name.firstName()} {faker.name.lastName()}</Header>
    <Table selectable={false} celled>
      <Table.Body>
        <Table.Row onClick={() => { console.log('Foo'); }}>
          <Table.Cell textAlign="center">
            <Statistic>
              <Statistic.Value>3</Statistic.Value>
              <Statistic.Label>Views</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell textAlign="center">
            <Statistic>
              <Statistic.Value>36</Statistic.Value>
              <Statistic.Label>Downloads</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell textAlign="center">
            <Statistic>
              <Statistic.Value>6</Statistic.Value>
              <Statistic.Label>Comments</Statistic.Label>
            </Statistic>
          </Table.Cell>
        </Table.Row>
        <Table.Row onClick={() => { console.log('Foo'); }}>
          <Table.Cell textAlign="center">
            <Statistic>
              <Statistic.Value>37</Statistic.Value>
              <Statistic.Label>Reviewers</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell textAlign="center">
            <Statistic>
              <Statistic.Value>8</Statistic.Value>
              <Statistic.Label>Files</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell textAlign="center">
            <Statistic>
              <Statistic.Value>3</Statistic.Value>
              <Statistic.Label>Approvals</Statistic.Label>
            </Statistic>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);
