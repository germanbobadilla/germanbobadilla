import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>I am the header</h1>
      <nav>
        <Link href="/contact">Home</Link>
        <Link href="/contact">Projects</Link>
        <Link href="/contact">Education</Link>
        <Link href="/contact">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};
export default Header;
