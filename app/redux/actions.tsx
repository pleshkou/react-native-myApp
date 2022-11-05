import {ADD_RECORD, REMOVE_RECORD, TOGGLE_RECORD} from './constants';

export interface Record {
  checked?: boolean;
  title?: string;
  key?: number;
  content?: string;
  details?: {price: number; count: number};
}

export interface Action extends Record {
  type: typeof ADD_RECORD | typeof REMOVE_RECORD | typeof TOGGLE_RECORD;
}

export const addRecord = (title: any): Action => ({
  type: ADD_RECORD,
  checked: false,
  title,
});

export const toggleRecord = (key: any): Action => ({
  type: TOGGLE_RECORD,
  key,
});

export const removeRecord = (): Action => ({
  type: REMOVE_RECORD,
});
