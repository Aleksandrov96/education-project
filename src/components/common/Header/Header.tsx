import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import logout from '../../../utils/logout';
import './header.scss';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="headerLogo">
        <Link className="title" to="/main">
          <img src={logo as string} className="title__logo" alt="logo" />
          Education
        </Link>
      </div>
      <button
        className="logoutBtn"
        type="button"
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        Logout

      </button>
    </header>
  );
}

export default Header;
