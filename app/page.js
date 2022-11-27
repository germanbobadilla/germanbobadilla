import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/contact">Contact</Link>
    </>
  );
};

export default Home;
