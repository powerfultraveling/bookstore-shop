//modules
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux-store
import { setUser, fetchUser, setUserError } from "../../redux/user/userAction";

//functions
import { getMe, getCartItem } from "../../API";
import { clearAuthLocal, getAuthLocal, getCartLocal } from "../../utils";

//components
import IsLoading from "../isLoading/IsLoading";

//statics
import styles from "../../css/TopNav.module.css"
import cartImage from "../../img/cart.png";
import { setCart } from "../../redux/cart/cartAction";

export default function TopNav() {

  const user = useSelector((state)=>{return state.user.user})
  const isLoading = useSelector((state)=>state.user.isLoading)
  const cart = useSelector((state)=>state.cart.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
    const token = getAuthLocal();
    if (!token) {
      dispatch(setUser(null))
      console.log("no token");
      return;
    }
    console.log(isLoading)
    getMe(token).then((res) => {
      if (res.ok === 0) {
        dispatch(setUserError("no such user"))
        console.log("error");
        return;
      }
      console.log(res.data);
      dispatch(setUser(res.data))
    });
  }, []);

  useEffect(()=>{
    if(user === null){
      return 
    }
    getCartItem(user.id)
    .then((res)=>{
      dispatch(setCart(res.data, res.cartId))
    })
  }, [user])

  function handleLogout() {
    dispatch(setUser(null))
    clearAuthLocal();
  }
  return (
    <div className={styles.Top_nav}>
      {isLoading === true && <IsLoading></IsLoading>}
      <div className={styles.top_nav_block}>
        <div className={styles.top_nav_user}>
          {user && (
            <div className={styles.flex}>
              <span onClick={handleLogout}>
                <a className={styles.login_box} href="/logout">
                  登出
                </a>
              </span>
              <a href={`/cart`}>
                <img
                  src={cartImage}
                  alt="cart"
                  style={{ width: "30px", height: "auto", marginLeft: "5px" }}
                />
                <span className={styles.cartNums}>{cart.length}</span>
              </a>
            </div>
          )}
          {!user && (
            <div className={styles.login_box}>
              <a href="/login">登入 / 註冊</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
