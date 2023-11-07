import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
        <Header />
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Root