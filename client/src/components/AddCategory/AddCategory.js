import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../FormInputs/FormInputs';
import { stateMapper } from '../../store/store';

const AddCategory = (props) => {
  const [category, setCategory] = useState('');
  const handleChange = (e) => setCategory(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/category', { category: category })
      .then((res) => toast.success('category added'))
      .catch((err) => toast.error('ERROR'));
    props.dispatch({
      type: 'GET_CATEGORY',
    });
    setCategory('');
  };
  return (
    <div className="mt-5">
      <h3>Add Category</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="category"
          label={'Category'}
          handleChange={handleChange}
          value={category}
          required
        />
        <ToastContainer />
        <button className="btn btn-outline-danger">Add</button>
      </form>
    </div>
  );
};

export default connect(stateMapper)(AddCategory);
