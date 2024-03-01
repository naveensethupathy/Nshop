/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </>
  
  )
};

export default App