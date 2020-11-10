import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch, useMappedState} from 'redux-react-hook';
import {useHistory} from 'react-router-dom';
import {Projects} from './Projects';
import {fetchProjects, selectProjectsList} from '../../data/projects';

export const ProjectsContainer: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {projects} = useMappedState(useCallback(state => ({
    projects: selectProjectsList(state),
  }), []));

  const onProjectSelectCallback = useCallback((projectUuid: string) => (history.push(projectUuid)), []);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return <Projects projects={projects} onProjectSelect={onProjectSelectCallback} />
};