import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Newsletter from './Newsletter';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile nav whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Header onToggleMenu={() => setMenuOpen((v) => !v)} />
      <Navigation menuOpen={menuOpen} />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Layout;
