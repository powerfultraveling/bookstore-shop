import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import { getMe } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import { setCartLocal, getCartLocal, getAuthLocal } from "../../utils";
import styles from "../../css/cart.module.css";

function CartCard(props) {
  const item = props.data;
  const orderProducts = props.orderProducts;
  const setOrderProducts = props.setOrderProducts;
  const setSum = props.setSum;

  return (
    <div className={styles.card}>
      <div className={`${styles.box_10} ${styles.center}`}>
        <button
          onClick={() => {
            setOrderProducts((arr) => [...arr, item.Product]);
            setSum((sum) => sum + item.Product.price);
          }}
        ></button>
      </div>
      <div className={`${styles.box_60} ${styles.fl_hr}`}>
        <img className={styles.card_img} src={item.Product.image}></img>
        <span>{item.Product.name}</span>
      </div>
      <div className={styles.box_10}>{/* <input type="select"></input> */}</div>
      <div className={`${styles.box_15}`}>{item.Product.price}</div>
      <div className={`${styles.box_5} ${styles.center}`}>
        <button className={styles.delete_btn}>x</button>
      </div>
    </div>
  );
}

function CartPage(props) {
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

function PayPage(props) {
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
        <div className={`${styles.box}`}></div>
        <div className={`${styles.box}`}></div>
        <div className={`${styles.box}`}></div>
      </section>
    </div>
  );
}

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { user, setUser } = useContext(AuthContext);
  const [page, setPage] = useState("cart");
  const [cartItems, setCartItems] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [sum, setSum] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/cart/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAdd(item) {
    console.log(item);
  }
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
