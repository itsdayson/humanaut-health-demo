// main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/charts/styles.css';
import App from './App.jsx';
import SimpleBarChart from './test.jsx';
import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <div className="main-container">
      <App />
      {/* <SimpleBarChart /> */}
    </div>
  </MantineProvider>
);
