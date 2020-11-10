import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image, Header } from 'semantic-ui-react';
import _ from 'lodash';
import faker from 'faker';
import styles from './viewers.module.css';

export const Viewers = () => {
  const images = _.times(Math.ceil(Math.random() * 20), () => ({
    url: faker.image.imageUrl(),
  }));

  return (
    <div>
      <div className={styles.viewers}>
        <div className={styles.profile}>
          <Image src={faker.image.avatar()} size="tiny" circular />
          <Header as="h4">{faker.name.findName()}</Header>
          <div>{faker.name.jobTitle()}</div>
          <div>{faker.internet.email()}</div>
        </div>
        <div className={styles['watch-cards']}>
          {images.map(link => (
            <Image className={styles['watch-card']} src={link.url} size="small" />
          ),
          )}
        </div>
      </div>
    </div>
  );
};
