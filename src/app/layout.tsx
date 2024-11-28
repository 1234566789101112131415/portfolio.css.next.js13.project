import Header from './component/header';
import Footer from './component/footer';
import './style/globals.css';  // Correct path to your global styles

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>  {/* Content of each page will be injected here */}
      <Footer />
    </>
  );
};

export default Layout;
