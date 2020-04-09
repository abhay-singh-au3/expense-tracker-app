import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const signUp = newUser => {
  return axios.post('/users/signup', {
    email: newUser.email,
    password: newUser.password
  });
};

export const login = user => {
  axios.post('/users/login', {
    email: user.email,
    password: user.password
  });

  return localStorage.setItem('loggedIn', true);
};

export const logout = () => {
  return axios.get('/users/logout');
};
