import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { stateMapper } from '../../store/store';

const Expense = (props) => {
  useEffect(() => {
    props.dispatch({
      type: 'GET_EXPENSE',
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2>Expenses</h2>
      <h3 className="text-danger">- {`$ ${props.expense}`}</h3>
    </>
  );
};

export default connect(stateMapper)(Expense);
