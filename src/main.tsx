import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ImageProvider from './context/imageProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ImageProvider>
      <App />
    </ImageProvider>
  </React.StrictMode>
);
