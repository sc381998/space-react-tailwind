import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DataGrid from './pages/DataGrid';
import Landing from './pages/Landing';
import Search from './pages/Search';

function App() {
  return (
    <Provider store={store}>
      <Landing />
      <div className='m-20'>
        <Search />
        <DataGrid />
      </div>
    </Provider>
  );
}

export default App;
