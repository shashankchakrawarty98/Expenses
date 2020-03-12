import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashBoardPage = () =>(
    <div class="container">
      
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
  )

export default ExpenseDashBoardPage;