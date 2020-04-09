import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../FormInputs/FormInputs';
import { stateMapper } from '../../store/store';

const AddIncome = (props) => {
  const [income, setIncome] = useState({
    name: '',
    amount: 0,
    desc: '',
    category: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome({
      ...income,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { name, desc, category } = income;
    e.preventDefault();
    axios
      .post('/incomes', { name, desc, category, amount: Number(income.amount) })
      .then((res) => toast.success('Income Added'))
      .catch((err) => toast.error('Something went wrong'));
    props.dispatch({
      type: 'GET_INCOME',
    });
    setIncome({ name: '', amount: '', desc: '' });
  };
  return (
    <div className="mt-5">
      <h2 className="text-success">Add an income</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Income Name'}
          name="name"
          type="text"
          handleChange={handleChange}
          value={income.name}
          required
        />
        <FormInput
          label={'Amount'}
          name="amount"
          type="number"
          handleChange={handleChange}
          value={income.amount}
          required
        />
        <FormInput
          label={'Description'}
          name="desc"
          type="textarea"
          handleChange={handleChange}
          value={income.desc}
          required
        />
        <select
          className="form-control"
          onChange={handleChange}
          name="category"
        >
          <option value="">Select</option>
          {props.categories.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <ToastContainer />
        <button className="btn btn-outline-success mt-3">Add</button>
      </form>
    </div>
  );
};

export default connect(stateMapper)(AddIncome);
