import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';

export default function HomePage() {

  const links = [
    { name: 'Главная', route: '/', active: false },
    { name: 'Каталог', route: 'catalog', active: false },
    { name: 'О магазине', route: 'about', active: true },
    { name: 'Контакты', route: 'contacts', active: false },
  ];
  
  const footerLinks = [
    { name: 'О магазине', route: 'about' },
    { name: 'Каталог', route: 'catalog' },
    { name: 'Контакты', route: 'contacts' },
  ];


  const banner = {
    name: 'К весне готовы!',
    src: '/img/banner.jpg',
  };

  return (
    <>
      <Header links={links} />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner name={banner.name} src={banner.src} />
            <Outlet />
          </div>
        </div>
      </main>
      <Footer links={footerLinks} />
    </>
  );
}
