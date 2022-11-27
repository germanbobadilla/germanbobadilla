import '../styles/globals.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Head from './components/head';
import Scripts from './components/scripts';

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
