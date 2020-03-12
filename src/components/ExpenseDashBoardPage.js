import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashBoardPage = () =>(
    <div className="container">
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
  )

export default ExpenseDashBoardPage;