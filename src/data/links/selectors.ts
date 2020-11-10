import { createSelector } from 'reselect';
import { RootState } from '../reducer';

const selectLinks = ({ links }: RootState) => links;

export const selectLinksList = createSelector(
  selectLinks,
  ({ data }) => Object.values(data),
);