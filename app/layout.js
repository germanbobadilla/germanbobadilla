import '../styles/globals.css';
// import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Head from './components/head';

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
