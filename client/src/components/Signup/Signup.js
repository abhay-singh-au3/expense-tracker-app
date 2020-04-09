import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../FormInputs/FormInputs';
import { signUp } from '../../utils/UserLoginSingupLogoutFunctions';

const Signup = () => {
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
    const response = await signUp(user);
    if (response.data.success) {
      toast.success(response.data.message + '. Login to continue');
    } else {
      toast.error(response.data.message + ' Try to Login');
    }
  };

  return (
    <div className="col-md-5 offset-md-2 mt-5">
      <h2 className="h3 mt-5">I don't have an account</h2>
      <span className="lead">Signup with your email and password</span>
      <hr />
      <form onSubmit={handleSubmit}>
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
        <ToastContainer />
        <button type="submit" className="btn btn-outline-danger">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
