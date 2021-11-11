import {useEffect} from "react";
import styles from "../../css/cart.module.css";
import CartCard from "../../components/Card/CartCard";


export default function CartPage(props) {
    const sum = props.sum;
    const setSum = props.setSum;
    const orderProducts = props.orderProducts;
    const setOrderProducts = props.setOrderProducts;
    const cartItems = props.cartItems;
    const setPage = props.setPage;
    console.log(cartItems);
    
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
            <span className={styles.dot}>2</span>
            <span className={styles.cart_title_after}>填寫資料</span>
          </div>
        </div>
        <section className={styles.main_sec}>
          <div className={styles.card_block}>
            {cartItems.map((item) => {
              return (
                <CartCard
                  data={item}
                  setSum={setSum}
                  orderProducts={orderProducts}
                  setOrderProducts={setOrderProducts}
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
  
  
