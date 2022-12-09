import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Funko'd Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;
