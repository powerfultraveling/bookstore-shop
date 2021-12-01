//modules
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import TopNavBar from "../../components/TopNav/TopNav";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import PayPage from "./PayPage";
import CartPage from "./CartPage";

//static
import styles from "../../css/cart.module.css";



function Cart() {
  const [page, setPage] = useState("cart");
  const [cartItems, setCartItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [sum, setSum] = useState(0);
  const user = useSelector((state)=>state.user.user);
  const cart = useSelector((state)=>state.cart.cart);


  useEffect(()=>{
    console.log(cart)
    const newCart = cart.map((item)=>{
      let temp = {...item, checked: false, amount: 1}
      return temp
    })
    setCartItems(newCart);
  }, [cart])


  useEffect(()=>{
    console.log(cartItems);
  }, [cartItems])

  useEffect(()=>{
    console.log(orderItems)
  }, [orderItems])

  return (
    <div>
      <TopNavBar></TopNavBar>
      <SmallNavBar></SmallNavBar>
      {page === "cart" && (
        <CartPage
          cartItems={cartItems}
          setCartItems={setCartItems}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
          sum={sum}
          setSum={setSum}
          setPage={setPage}
        ></CartPage>
      )}
      {page === "payment" && (
        <PayPage
          cartItems={cartItems}
          setCartItems={setCartItems}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
          sum={sum}
          setSum={setSum}
          setPage={setPage}
        ></PayPage>
      )}
    </div>
  );
}

export default Cart;
