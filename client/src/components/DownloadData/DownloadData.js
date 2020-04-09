import React, { useState } from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../../store/store';
import axios from 'axios';
import downloadData from '../../utils/download';

const DownloadData = (props) => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const handleChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/${type}/download/${category}`)
      .then((res) => downloadData(res.data));
  };

  return (
    <div className="mt-5">
      <h3>Download Data</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Select Type</label>
        <select
          className="form-control mb-3"
          onChange={(e) => setType(e.target.value)}
          name="type"
        >
          <option>Select</option>
          <option value="incomes">Income</option>
          <option value="expenses">Expense</option>
        </select>
        <label htmlFor="category">Select Category</label>
        <select
          className="form-control"
          onChange={handleChange}
          name="category"
        >
          <option value="">Select</option>
          <option value="all">All</option>
          {props.categories.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-outline-success mt-3">
          Download
        </button>
      </form>
    </div>
  );
};

export default connect(stateMapper)(DownloadData);
