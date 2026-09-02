import { Link, useLocation } from 'react-router-dom';

function Navigation({ menuOpen }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav id="navigation">
      <div className="container">
        <div id="responsive-nav" className={menuOpen ? 'active' : ''}>
          <ul className="main-nav nav navbar-nav">
            <li className={isHome ? 'active' : ''}><Link to="/">Home</Link></li>
            <li><a href="#">Hot Deals</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Smartphones</a></li>
            <li><a href="#">Cameras</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
