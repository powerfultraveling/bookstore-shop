import React from "react";
import styles from "../../css/cart.module.css";

export default function CartCard(props) {
  const item = props.data;
  const orderItems = props.orderItems;
  const setOrderItems = props.setOrderItems;
  const setCartItems = props.setCartItems;
  const cartItems = props.cartItems;
  const setSum = props.setSum;
  const sum = props.sum;

  return (
    <div className={styles.card}>
      <div className={`${styles.box_10} ${styles.center}`}>
        {item.checked === false && (
          <input
            type="checkbox"
            className={styles.check_btn}
            onClick={() => {
              item.checked = true;
              setOrderItems([...orderItems, item]);
              const totalPrice = item.Product.price * item.amount;
              setSum(sum + totalPrice);
            }}
          ></input>
        )}
        {item.checked === true && (
          <input
            type="checkbox"
            checked="checked"
            className={styles.uncheck_btn}
            onClick={() => {
              item.checked = false;
              const temp = orderItems.filter((element) => {
                return element.id !== item.id;
              });
              setOrderItems(temp);
              const totalPrice = item.Product.price * item.amount;
              setSum(sum - totalPrice);
            }}
          ></input>
        )}
      </div>
      <div className={`${styles.box_50} ${styles.fl_hr}`}>
        <img className={styles.card_img} src={item.Product.image}></img>
        <span>{item.Product.name}</span>
      </div>
      <div className={`${styles.box_20} ${styles.flex_hor_evenly}`}>
        <button
          className={styles.amount_btn}
          onClick={() => {
            const temp = cartItems.map((element) => {
              if (element.id === item.id) {
                element.amount--;
                return element;
              }
              return element;
            });
            setCartItems(temp);

            const exist = orderItems.every((element) => {
              return element.id === item.id;
            });
            if (exist === true) {
              const orderTemp = orderItems.map((element) => {
                if (element.id === item.id) {
                  element.amount--;
                  return element;
                }
                return element;
              });
              setOrderItems(orderTemp);
            }
          }}
        >
          -
        </button>
        <span>{item.amount}</span>
        <button
          className={styles.amount_btn}
          onClick={() => {
            const temp = cartItems.map((element) => {
              if (element.id === item.id) {
                element.amount++;
                return element;
              }
              return element;
            });
            setCartItems(temp);

            const exit = orderItems.every((element) => {
              return element.id === item.id;
            });

            if (exit === true) {
              const orderTemp = orderItems.map((element) => {
                if (element.id === item.id) {
                  element.amount++;
                  return element;
                }
                return element;
              });
              setOrderItems(orderTemp);
            }
          }}
        >
          +
        </button>
      </div>
      <div className={`${styles.box_15}`}>{item.Product.price}元</div>
      <div className={`${styles.box_5} ${styles.center}`}>
        <button className={styles.delete_btn}>x</button>
      </div>
    </div>
  );
}
