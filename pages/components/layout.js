import React from 'react';
import Head from 'next/head'
import Navbar from "./navbar"

const Layout = ({
  children
}) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;