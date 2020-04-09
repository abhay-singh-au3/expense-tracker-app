import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../../store/store';

import Balance from '../../components/Balance/Balance';
import Income from '../../components/Income/Income';
import Expense from '../../components/Expense/Expense';
import Navbar from '../../components/Navbar/Navbar';
import AddIncome from '../../components/Income/AddIncome';
import AddExpense from '../../components/Expense/AddExpense';
import AddCategory from '../../components/AddCategory/AddCategory';

function Home(props) {
  useEffect(() => {
    props.dispatch({
      type: 'GET_CATEGORY',
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Balance />
            <Income />
            <Expense />
          </div>
          <div className="col-md-4">
            <AddIncome />
          </div>
          <div className="col-md-4">
            <AddExpense />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <AddCategory />
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(stateMapper)(Home);
