import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { headerMenu } from '../config/menu';
import Sidenav from './Sidenav';

const Layout = () => {
  return (
    <div className='app'>
      <Header links={headerMenu} />
      <Sidenav />
      <main id='main-content'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
