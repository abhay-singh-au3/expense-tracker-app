import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../../store/store';

const Income = (props) => {
  useEffect(() => {
    props.dispatch({
      type: 'GET_INCOME',
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="mb-5">
      <h2>Incomes</h2>
      <h3 className="text-success">{`+ $ ${props.income}`}</h3>
    </div>
  );
};

export default connect(stateMapper)(Income);
