/**
 * Esse é o ponto de inicio do aplicativo react 
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

function render() {
  const root = createRoot(document.getElementById('mainApp'));
  root.render(<h2>Hello from React!</h2>);
}

render();
