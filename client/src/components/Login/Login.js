import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../FormInputs/FormInputs';
import { login } from '../../utils/UserLoginSingupLogoutFunctions';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(user);
    if (response.status === 200) {
      props.history.push('/home');
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="col-md-5 mt-5">
      <h2 className="h3 mt-5">I already have an account</h2>
      <span className="lead">Login with your email and password</span>
      <hr />
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label={'Email'}
          type="email"
          value={user.email}
          name="email"
          required
        />
        <FormInput
          handleChange={handleChange}
          label={'Password'}
          type="password"
          value={user.password}
          name="password"
          required
        />
        <ToastContainer />
        <button type="submit" className="btn btn-outline-danger">
          Login
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
