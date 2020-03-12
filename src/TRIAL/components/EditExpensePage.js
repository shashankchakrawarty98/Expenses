import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses'
const EditExpensePage = (props)=>{
    console.log(props,"edit expense page>>>>");
    return(
        <div>
        <ExpenseForm
        expense = {props.expense}
        onSubmit = {(expense)=>{
            props.dispatch(editExpense(props.expense.id,expense))
            props.history.push('/')
            console.log(expense,"updated")}}
        />
    </div>
    );
}


const mapStateToProps =(state,props)=>{
    return{
        expense:state.expenses.find((expense)=>expense.id===props.match.params.id)
    }
}
  export default connect (mapStateToProps) (EditExpensePage);