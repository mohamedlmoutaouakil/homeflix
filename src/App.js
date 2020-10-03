import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/ConfigureStore';
import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
