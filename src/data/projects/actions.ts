import {createAsyncActions} from 'redux-ts-utils';
import {noop} from 'lodash';
import {Project} from './types';
import {getAllProjects} from '../../api';
import {AppThunk} from 'src/types';
import {loadingChanged} from '../common';

export const fetchProjects = (): AppThunk => async dispatch => {
  try {
    dispatch(fetchProjectsStarted());
    dispatch(loadingChanged(true));
    const response = await getAllProjects();
    dispatch(loadingChanged(false));
    dispatch(fetchProjectsSuccess(response));
  } catch (e) {
    dispatch(fetchProjectsFailure(e));
  }
};

export const [
  fetchProjectsStarted,
  fetchProjectsSuccess,
  fetchProjectsFailure
] = createAsyncActions('REQUEST_PROJECTS', noop, (projects: Project[]) => projects);