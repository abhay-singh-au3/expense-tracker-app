import React from 'react';
import FormInput from '../FormInputs/FormInputs';
import { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  return (
    <div className="col-md-5 offset-md-2 mt-5">
      <h2 className="h3 mt-5">I don't have an account</h2>
      <span className="lead">Signup with your email and password</span>
      <hr />
      <FormInput
        handleChange={handleChange}
        label={'Email'}
        type="email"
        name="email"
        value={user.value}
        required
      />
      <FormInput
        handleChange={handleChange}
        label={'Password'}
        type="password"
        name="password"
        value={user.value}
        required
      />
      <button type="submit" className="btn btn-outline-danger">
        Signup
      </button>
    </div>
  );
};

export default Signup;
