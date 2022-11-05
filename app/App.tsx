import React from 'react';
import {Provider} from 'react-redux';
import {NewRecord} from './components/NewRecord';
import {RecordList} from './components/RecordList';
import {EraseList} from './components/EraseList';
import {store} from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <NewRecord />
      <RecordList />
      <EraseList />
    </Provider>
  );
};

export default App;
