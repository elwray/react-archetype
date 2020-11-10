import {createAction} from 'redux-ts-utils';

export const loadingChanged = createAction<boolean>('LOADING_CHANGED');