import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>I am the header</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/pages/projects">Projects</Link>
        <Link href="/pages/education">Education</Link>
        <Link href="/pages/blog">Blog</Link>
        <Link href="/pages/contact">Contact</Link>
      </nav>
    </header>
  );
};
export default Header;
