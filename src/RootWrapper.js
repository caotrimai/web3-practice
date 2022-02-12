import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { store } from './app/store';

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
      {rootRouter}
    </Provider>
  );
}