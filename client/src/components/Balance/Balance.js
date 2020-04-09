import React from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../../store/store';

const Balance = (props) => {
  const bal = props.income - props.expense;
  return (
    <div className="mt-5 mb-5">
      <h2>Balance</h2>
      <h3>{`$ ${bal}`}</h3>
    </div>
  );
};

export default connect(stateMapper)(Balance);
