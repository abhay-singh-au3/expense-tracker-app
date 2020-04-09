import React from 'react';
import { useState } from 'react';
import FormInput from '../FormInputs/FormInputs';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div className="col-md-5 mt-5">
      <h2 className="h3 mt-5">I already have an account</h2>
      <span className="lead">Login with your email and password</span>
      <hr />
      <form>
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
        <button type="submit" className="btn btn-outline-danger">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
