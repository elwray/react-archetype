import { times } from 'lodash';
import faker from 'faker';

export const createLinks = () =>
  times(20, () => ({
    linkName: faker.company.companyName(),
    sentDate: faker.date.past().toDateString(),
    lastActivity: faker.date.recent().toDateString(),
  }));
