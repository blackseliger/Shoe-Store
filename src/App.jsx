import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import CatalogItemPage from './pages/CatalogItemPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import Page404 from './pages/Page404';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<CatalogPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CatalogItemPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
