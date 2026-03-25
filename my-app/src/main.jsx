import { StrictMode } from 'react';
import React from 'react';

import ReactDom from 'react-dom/client'
import './index.css';
import 'react-multi-carousel/lib/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes'
import Shop from './Shop';
import Navigation from './components/navigation/Navigation'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={router} >
      <Navigation/>
      
  </RouterProvider>
  </ React.StrictMode>
);
  
