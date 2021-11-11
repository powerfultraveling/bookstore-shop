import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import PayPage from "./PayPage";
import { getMe, getCartItem } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import {
  setCartLocal,
  getCartLocal,
  getAuthLocal,
  setAuthLocal,
} from "../../utils";
import styles from "../../css/cart.module.css";
import CartPage from "./CartPage";



function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { user, setUser } = useContext(AuthContext);
  const [page, setPage] = useState("cart");
  const [cartItems, setCartItems] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [sum, setSum] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const token = getAuthLocal();
    getMe(token).then((data) => {
      console.log(data.data.id);
      setUser(data.data);
      const id = data.data.id;
      getCartItem(id)
        .then((data) => {
          const newData = data.map((item) => {
            let temp = { ...item, checked: false, amount: 1,};
            return temp;
          });
          setCartItems(newData);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <div>
      <SmallNavBar></SmallNavBar>
      {page === "cart" && (
        <CartPage
          cartItems={cartItems}
          setCartItems={setCartItems}
          orderProducts={orderProducts}
          setOrderProducts={setOrderProducts}
          sum={sum}
          setSum={setSum}
          setPage={setPage}
        ></CartPage>
      )}
      {page === "payment" && (
        <PayPage
          cartItems={cartItems}
          setCartItems={setCartItems}
          orderProducts={orderProducts}
          setOrderProducts={setOrderProducts}
          sum={sum}
          setSum={setSum}
          setPage={setPage}
        ></PayPage>
      )}
    </div>
  );
}

export default Cart;
