import React from 'react';

import './Navbar.style.css';
import { logout } from '../../utils/UserLoginSingupLogoutFunctions';
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
  const logoutUser = () => {
    logout();
    props.history.push('/');
  };
  return (
    <div className="container-fluid custom-nav">
      <p className="navbar-brand">
        <strong>Expense Tracker</strong>
      </p>
      <p className="navbar-brand logout" onClick={logoutUser}>
        Logout
      </p>
    </div>
  );
};

export default withRouter(Navbar);
