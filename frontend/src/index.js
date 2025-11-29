import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

const root = createRoot(document.getElementById('root') || document.body.appendChild(document.createElement('div')));
root.render(React.createElement(App));
