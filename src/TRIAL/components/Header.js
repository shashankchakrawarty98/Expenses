import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = ()=>(
   
  <header className="header">
    <h1 className="aaaaaaaaaaaaaaa">Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active" >Create</NavLink>
    <NavLink to="/help"activeClassName="is-active" >Help</NavLink>
    </header>
  )

  export default Header