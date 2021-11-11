import React from "react";
import styles from "../../css/cart.module.css";

export default function CartCard(props) {
    const item = props.data;
    const orderProducts = props.orderProducts;
    const setOrderProducts = props.setOrderProducts;
    const setSum = props.setSum;
  
    return (
      <div className={styles.card}>
        <div className={`${styles.box_10} ${styles.center}`}>
          <button
            className={styles.check_btn}
            onClick={() => {
              
            }}
          >
            選取
          </button>
        </div>
        <div className={`${styles.box_50} ${styles.fl_hr}`}>
          <img className={styles.card_img} src={item.Product.image}></img>
          <span>{item.Product.name}</span>
        </div>
        <div className={styles.box_20}>1</div>
        <div className={`${styles.box_15}`}>{item.Product.price}</div>
        <div className={`${styles.box_5} ${styles.center}`}>
          <button className={styles.delete_btn}>x</button>
        </div>
      </div>
    );
  }
  