import {combineReducers, Reducer} from 'redux';
import {assetsReducer} from './assets';
import {foldersReducer} from './folders';
import {linksReducer} from './links';
import {projectsReducer} from './projects';
import {commonReducer} from './common/reducer';

type UnwrapReducer<R> = R extends Reducer<infer U> ? U : never;

export const reducer = combineReducers({
  common: commonReducer,
  assets: assetsReducer,
  folders: foldersReducer,
  links: linksReducer,
  projects: projectsReducer,
});

export type RootState = UnwrapReducer<typeof reducer>;

export default reducer;
