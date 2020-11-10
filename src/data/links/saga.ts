import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import * as fakeApi from './fakeLinksApi';

export function* fetchLinksSaga() {
  try {
    const links = yield call(fakeApi.createLinks);
    yield put(actions.fetchLinksSuccess(links));
  } catch (err) {
    yield put(actions.fetchLinksFailure(err));
  }
}

export function* linksSaga() {
  yield all([
    takeLatest(actions.fetchLinks, fetchLinksSaga),
  ]);
}
