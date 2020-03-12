import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {

    
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
    debugger
    console.log("props.match.params.id", typeof props.match.params.id)
    let ex =     state.expenses.find((expense) => { console.log( typeof expense.id,);  return expense.id === props.match.params.id})
 console.log({ex})
  return {
    expense:ex
  };
};

export default connect(mapStateToProps)(EditExpensePage);