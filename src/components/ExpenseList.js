import React from 'react';

import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
const ExpenseList =(props) =>(

    
    <div className="ExpenseList">
        
        {props.expenses.map((expense)=>{
            
            console.log("I'm here ---------------------------", props.expenses);
            return <ExpenseListItem key={expense.id} {...expense}/>
            
        })}
        
    </div>
)
const mapStateToPorps = (state)=>{
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToPorps)(ExpenseList)

