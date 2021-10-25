import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext, CartContext } from "./contexts";

import HomePage from "./pages/HomePage/HomePage";
import LogIn from "./pages/LogIn/LogIn";
import Join from "./pages/JoinPage/JoinPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import StationariesPage from "./pages/StationariesPage/StationariesPage";
import ProPageStationary from "./pages/ProPageStationary/ProPageStationary";
import Cart from "./pages/Cart/Cart";
import AdminOrder from "./pages/Administrator/AdminOrder/AdminOrder";
import AdminProductAll from "./pages/Administrator/AdminProduct/AdminProductAll/AdminProductAll";
import AdminProductAdd from "./pages/Administrator/AdminProduct/AdminProductAdd/AdminProductAdd";
import AdminProductEdit from "./pages/Administrator/AdminProduct/AdminProductEdit/AdminProductEdit";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Router>
          <div>
            <Switch>
              <Route path="/admin/product/edit/:id">
                <AdminProductEdit></AdminProductEdit>
              </Route>
              <Route path="/admin/product/add">
                <AdminProductAdd />
              </Route>
              <Route path="/admin/product">
                <AdminProductAll />
              </Route>
              <Route path="/admin">
                <AdminOrder />
              </Route>
              <Route path="/cart/:id">
                <Cart />
              </Route>
              <Route path="/stationary/:id">
                <ProPageStationary />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/join">
                <Join />
              </Route>
              <Route path="/books">
                <BooksPage />
              </Route>
              <Route path="/stationaries">
                <StationariesPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
