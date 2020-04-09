import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../FormInputs/FormInputs';
import { stateMapper } from '../../store/store';

const AddExpense = (props) => {
  const [expense, setExpense] = useState({
    name: '',
    amount: 0,
    desc: '',
    category: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    const { name, desc, category } = expense;
    e.preventDefault();
    axios
      .post('/expenses', {
        name,
        desc,
        category,
        amount: Number(expense.amount),
      })
      .then((res) => toast.success('Expense Added'))
      .catch((err) => toast.error('Something went wrong'));
    props.dispatch({
      type: 'GET_EXPENSE',
    });
    setExpense({ name: '', amount: '', desc: '' });
  };
  return (
    <div className="mt-5">
      <h2 className="text-danger">Add an expense</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Expense Name'}
          name="name"
          type="text"
          handleChange={handleChange}
          value={expense.name}
          required
        />
        <FormInput
          label={'Amount'}
          name="amount"
          type="number"
          handleChange={handleChange}
          value={expense.amount}
          required
        />
        <FormInput
          label={'Description'}
          name="desc"
          type="textarea"
          handleChange={handleChange}
          value={expense.desc}
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
        <button className="btn btn-outline-danger mt-3">Add</button>
      </form>
    </div>
  );
};

export default connect(stateMapper)(AddExpense);
