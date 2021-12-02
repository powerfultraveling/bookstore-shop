//modules
import React,{useState} from "react";

//statics
import styles from "../../../css/cart.module.css";

export default function PayProcedure(){
    return(
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
    )
}