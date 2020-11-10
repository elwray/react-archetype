import {createSelector} from 'reselect';
import {RootState} from '../reducer';
import {Project} from 'src/data/projects/types';

const selectProjects = ({projects}: RootState) => projects;

export const selectProjectsList = createSelector(
  selectProjects,
  ({data}) => Object.values(data) as Project[],
);