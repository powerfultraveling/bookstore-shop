//modules
import { useEffect } from "react";

//statics
import styles from "../../css/cart.module.css";

//components
import CartCard from "../../components/Card/CartCard";
import CartProcedure from "./CartProcedure";

export default function CartPage(props) {
  const sum = props.sum;
  const setSum = props.setSum;
  const orderItems = props.orderItems;
  const setOrderItems = props.setOrderItems;
  const cartItems = props.cartItems;
  const setCartItems = props.setCartItems;
  const setPage = props.setPage;
 

  return (
    <div>
      <CartProcedure></CartProcedure>
      <section className={styles.main_sec}>
        <div className={styles.card_block}>
          {cartItems.map((item) => {
            return (
              <CartCard
                data={item}
                setSum={setSum}
                sum={sum}
                orderItems={orderItems}
                setOrderItems={setOrderItems}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            );
          })}
        </div>
        <div className={styles.info_block}>
          <div className={`${styles.info_title} ${styles.center}`}>
            訂單摘要
          </div>
          <div className={`${styles.info_block_price}`}>消費總額: {sum}</div>
          <div>
            <button
              onClick={() => {
                setPage("payment");
              }}
              className={`${styles.pay_btn}`}
            >
              結帳
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
