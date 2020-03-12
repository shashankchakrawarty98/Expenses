import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeExpense } from "../actions/expenses";
// <Link to={`/edit/${id}`}>
// <h3>{description}</h3>
// <h3>{id}</h3>
// </Link>
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  console.log({ id });
  const { push } = useHistory();
  return (
    <div>
      <div class="card bg-light mb-3">
     
        <div class="card-header"> Expense Name : {description}</div>
        <div class="card-body">
          <p class="card-text">Amount: {amount}</p>

          <div
            class="btn-toolbar justify-content-between"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group" role="group" aria-label="First group">
              <button className="btn btn-primary"
                onClick={() => {
                  push(`/edit/${id}`);
                }}
              >
                show details
              </button>
            </div>

            <div class="input-group" >
              <button className="btn btn-secondary"
                onClick={() => {
                  dispatch(removeExpense({ id }));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(ExpenseListItem);
