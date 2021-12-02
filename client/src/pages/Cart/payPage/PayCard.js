//modules
import React from "react";

//statics
import payStyles from "../../../css/PayPage.module.css";
import styles from "../../../css/cart.module.css";

export default function PayCard(props){
    const item = props.item;

    return (
      <div className={`${payStyles.payCard}`}>
        <div className={`${styles.box_60} ${styles.center}`}>
          <img className={`${payStyles.payCard_img}`} src={item.Product.image}></img>
          <span>{item.Product.name}</span>
        </div>
        <div className={`${styles.box_20} ${styles.center}`}>共 {item.amount} 個</div>
        <div className={`${styles.box_20} ${styles.center}`}>{item.Product.price}元</div>
      </div>
    );
}
