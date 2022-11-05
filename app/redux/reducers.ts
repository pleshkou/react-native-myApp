import {ADD_RECORD, REMOVE_RECORD, TOGGLE_RECORD} from './constants';
import {Record, Action} from './actions';

const initialState: Record[] = [
  {
    key: 1,
    checked: false,
    title: 'Test 1',
    content: 'Some long long content',
    details: {
      price: 100,
      count: 5,
    },
  },
  {
    key: 2,
    checked: false,
    title: 'Test 2',
    details: {
      price: 200,
      count: 2,
    },
  },
  {
    key: 3,
    checked: false,
    title: 'Test 3',
  },
];

export const records = (state = initialState, action: Action): Record[] => {
  switch (action.type) {
    case ADD_RECORD: {
      return [
        ...state,
        {
          key: Date.now(),
          title: action.title,
          checked: false,
        },
      ];
    }
    case REMOVE_RECORD: {
      return state.filter((record: Record) => record.checked !== true);
    }
    case TOGGLE_RECORD: {
      return state.map((record: Record) =>
        record.key === action.key
          ? {...record, checked: !record.checked}
          : record,
      );
    }
    default: {
      return state;
    }
  }
};
