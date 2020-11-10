import { createAsyncActions } from 'redux-ts-utils';
import { noop } from 'lodash';
import { Link } from './types';

export const [
  fetchLinks,
  fetchLinksSuccess,
  fetchLinksFailure,
] = createAsyncActions('REQUEST_LINKS', noop, (links: Link[]) => links);
