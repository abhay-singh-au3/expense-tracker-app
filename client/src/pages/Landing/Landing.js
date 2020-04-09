import React from 'react';

import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';

const Landing = () => (
  <div className="container">
    <div className="row">
      <Login />
      <Signup />
    </div>
  </div>
);

export default Landing;
