import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MKContextWrapper } from './utils/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MKContextWrapper>
        <App />
      </MKContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

