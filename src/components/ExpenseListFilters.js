import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const ExpenseFilters = props => (
  <div class="btn-toolbar justify-content-between expanselistitem">
    <h3>Expense Dash Board Page</h3>
    <div class="input-group">
      <select
        className="form-control"
        value={props.filters.sortBy}
        onChange={e => {
          if (e.target.value === "date") {
            props.dispatch(sortByDate());
          } else if (e.target.value === "amount") {
            props.dispatch(sortByAmount());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <input
        type="text"
        className="form-control"
        value={props.filters.text}
        placeholder="Type Something for autosearch"
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      ></input>
    </div>
  </div>
);
const MapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(MapStateToProps)(ExpenseFilters);
