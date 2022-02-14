import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { store } from './app/store';
import { Web3Provider } from './features/web3Api';

export default function RootWrapper () {

  const rootRouter = (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  return (
    <Provider store={store}>
      <Web3Provider>
        {rootRouter}
      </Web3Provider>
    </Provider>
  );
}