// app/layout.tsx
import Header from './component/header';
import Footer from './component/footer';

import './styles/globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      {/* Header only rendered once here */}
      <Header />

      {/* The content injected from pages (like About, Home, etc.) */}
      <main>{children}</main>

      {/* Footer only rendered once here */}
      <Footer />
    </div>
  );
}
