import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import PetDetailsPage from './pages/detail';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import reportWebVitals from './reportWebVitals';
import PetDetailsNotFound from './pages/petDetailsNotFound';

const { worker } = require('./mocks/browser');
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<HomePage />} />
          <Route path=':type' element={<HomePage />} />
          <Route path=':type/:id' element={<PetDetailsPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='pet-details-not-found' element={<PetDetailsNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
