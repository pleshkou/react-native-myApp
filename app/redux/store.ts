import {legacy_createStore as createStore} from 'redux';
import {records} from './reducers';

export const store = createStore(records);
