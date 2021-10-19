import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import FooterNavbar from '../FooterNavbar';
import Orders from '../Orders';
import Products from '../Products';
import History from '../History';
import Cart from '../Cart';
import AddProduct from '../AddProduct';

function Components() {
  return (
    <div>
      <BrowserRouter>
        <FooterNavbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/products">
            < Products />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/add-product">
             <AddProduct />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default Components;
