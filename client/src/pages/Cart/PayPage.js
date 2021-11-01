import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import { getMe } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import {
  setCartLocal,
  getCartLocal,
  getAuthLocal,
  setAuthLocal,
} from "../../utils";
import styles from "../../css/cart.module.css";

export default function PayPage(props) {
  const sum = props.sum;
  const setSum = props.setSum;
  const orderProducts = props.orderProducts;
  const setOrderProducts = props.setOrderProducts;
  const cartItems = props.cartItems;
  const setPage = props.setPage;

  return (
    <div>
      <div className={styles.cart_procedure}>
        <div>
          <h2 className={styles.cart_title}>購物車</h2>
        </div>
        <div>
          <span className={styles.dot_current}>1</span>
          <span className={styles.cart_title_current}>選擇商品</span>
        </div>
        <div className={styles.line}></div>
        <div>
          <span className={styles.dot_current}>2</span>
          <span className={styles.cart_title_current}>填寫資料</span>
        </div>
      </div>
      <section className={styles.payPage_main_sec}>
        <div className={`${styles.fl_hr_lf}`}>
          <span
            onClick={() => {
              setPage("cart");
            }}
          >
            回到購物車
          </span>
        </div>
        <div className={`${styles.box}`}>
          {orderProducts.map((item) => (
            <PayCard item={item} />
          ))}
        </div>
        <div className={`${styles.box_grey}`}></div>
        <div className={`${styles.box}`}></div>
        <div className={`${styles.box}`}></div>
        <div className={`${styles.box}`}></div>
      </section>
    </div>
  );
}

function PayCard(props) {
  const item = props.item;

  return (
    <div className={`${styles.payCard}`}>
      <div className={`${styles.box_60} ${styles.center}`}>
        <img className={`${styles.payCard_img}`} src={item.image}></img>
        <span>{item.name}</span>
      </div>
      <div className={`${styles.box_20} ${styles.center}`}>{item.amount}</div>
      <div className={`${styles.box_20} ${styles.center}`}>{item.price}</div>
    </div>
  );
}
