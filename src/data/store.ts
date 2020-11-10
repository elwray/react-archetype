import {applyMiddleware, createStore, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer, {RootState} from './reducer';
import {rootSaga} from './saga';
import thunk from 'redux-thunk';

export default (initialState?: RootState): Store<RootState> => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, thunk];

  const store = createStore(
    reducer,
    initialState!,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
