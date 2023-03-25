import React from 'react'
import NavbarMain from './Navbar/Navbar'
import './../Layout/Layout.css'


import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <div className="Layout">

      <NavbarMain />

    
      <Outlet />
       <Footer/>
   
    </div>
  );
}
