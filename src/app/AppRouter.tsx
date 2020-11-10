import React, {ReactElement} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import {Projects} from './Projects';
import {Folders, ProjectFolders} from './Folders';

export const AppRouter = (): ReactElement => (
  <Router>
    <div className={styles.data}>
      <Switch>
        <Route path="/:projectUuid/:folderUuid">
          <Folders />
        </Route>
        <Route path="/:projectUuid">
          <ProjectFolders />
        </Route>
        <Route path="/">
          <Projects />
        </Route>
      </Switch>
    </div>
  </Router>
);