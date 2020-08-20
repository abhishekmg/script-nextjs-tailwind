import React from 'react';
import Head from 'next/head'
import Navbar from "./navbar"
import Footer from "./footer"




const Layout = ({
  children
}) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="scriptbox" />
      </Head>

      <Navbar />

      <main className="antialiased">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;