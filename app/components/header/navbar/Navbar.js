import React from 'react';
import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/pages/projects">Projects</Link>
      <Link href="/pages/education">Education</Link>
      <Link href="/blog/blog">Blog</Link>
      <Link href="/pages/contact">Contact</Link>
    </nav>
  );
};
export default Navbar;
