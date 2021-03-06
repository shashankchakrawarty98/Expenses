import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import login from "../components/login"

const AppRouter = (
  <BrowserRouter>
    <div>
      <Header  />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact />
        <Route path="/login" component={login} exact />
        <Route path="/create" component={AddExpensePage} exact />
        <Route path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
