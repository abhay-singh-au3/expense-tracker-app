import axios from 'axios';

export const signUp = (newUser) => {
  return axios.post('/users/signup', {
    email: newUser.email,
    password: newUser.password,
  });
};

export const login = (user) => {
  return axios.post('/users/login', {
    email: user.email,
    password: user.password,
  });
};

export const logout = () => {
  return axios.get('/users/logout');
};
