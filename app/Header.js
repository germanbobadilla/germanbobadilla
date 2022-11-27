import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>I am the header</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/education">Education</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};
export default Header;
