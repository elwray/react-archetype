import React from 'react';
import {StoreContext} from 'redux-react-hook';
import 'semantic-ui-css/semantic.min.css';
import {createStore} from '../data';
import {AppRouter} from './AppRouter';
import styles from './app.module.css';
import {Breadcrumb, Segment} from 'semantic-ui-react';
import {Spinner} from './Spinner';

const store = createStore();

const App = () => (
  <StoreContext.Provider value={store}>
    <div className={styles.reports}>
      <Segment raised>
        <Breadcrumb />
      </Segment>
      <Spinner>
        <AppRouter />
      </Spinner>
    </div>
  </StoreContext.Provider>
);

export default App;