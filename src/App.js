import Root from './Root';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Mission from './Mission';
import Izvoshra from './Izvoshra';
import Collection from './Collection';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useState, useEffect } from 'react';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <Root />}>
    <Route path='mission' element={ <Mission />} />
    <Route path='collection' element={ <Collection /> } />
    <Route path='izvoshra' element={ <Izvoshra /> } />
  </Route>
))


function App() {
  return (
    <>
      <RouterProvider router={router} />     
    </>
  );
}

export default App;
