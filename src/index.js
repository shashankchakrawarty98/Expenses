import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
//import { sortByAmount } from './actions/filters';
//  import {setTextFilter, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
const store = configureStore()

console.log(store.getState());

store.dispatch(addExpense({description:'water bill', amount:100}));
store.dispatch(addExpense({description:'gas bill' , amount:40}));
store.dispatch(addExpense({description:'office bill' , amount:300}));
store.dispatch(addExpense({description:'rent bill', amount:100}));
store.dispatch(addExpense({description:'car bill' , amount:40}));
store.dispatch(addExpense({description:'Tv bill' , amount:300}));
// store.dispatch(setTextFilter('bill'));
// store.dispatch(sortByAmount());

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'))
// },3000)

let state = store.getState()
console.log(state)

const visibleExpenses = getVisibleExpenses(state.expenses,state.filters) ;
console.log(visibleExpenses)
const jsx = (
    <Provider store={store}>
        {AppRouter}
    </Provider>
)

ReactDOM.render( jsx, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
