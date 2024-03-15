/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Footer from './components/Footer';
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
      <ToastContainer/>
    </>
  
  )
};

export default App