import React from 'react'
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className='layout'>
      <Head>
        <title>Funko'd Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
    </div>
  )
}

export default Layout;
