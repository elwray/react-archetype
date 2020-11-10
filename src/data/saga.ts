import { spawn } from 'redux-saga/effects';
import { linksSaga } from './links';

export function* rootSaga() {
  yield spawn(linksSaga);
}
