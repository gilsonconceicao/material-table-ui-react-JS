import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataTableProvider } from './context/dataTableContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataTableProvider>
      <App />
    </DataTableProvider>
  </React.StrictMode>
);


