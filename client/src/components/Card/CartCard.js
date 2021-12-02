//modules
import {useEffect} from "react";

//statics
import styles from "../../css/cart.module.css";
import { setCart } from "../../redux/cart/cartAction";


export default function CartCard(props) {
  //props
  const item = props.data;
  const orderItems = props.orderItems;
  const setOrderItems = props.setOrderItems;
  const setCartItems = props.setCartItems;
  const cartItems = props.cartItems;
  const setSum = props.setSum;
  const sum = props.sum;

  useEffect(()=>{
    console.log(cartItems)
  },[])

  useEffect(()=>{
    let temp = 0;
    for(let i = 0; i<orderItems.length; i++){
      temp = temp + (orderItems[i].amount*orderItems[i].Product.price)
    }
    console.log(temp)
    setSum(temp)
  }, [orderItems])

  useEffect(()=>{
    const tempOrder = cartItems.filter((element)=>{
      return element.checked === true
    })

    setOrderItems(tempOrder)
  },[cartItems])

  //event handler
  function hadleDelete(){
    const tempCartItems = cartItems.filter((element)=>{
      return element.id !== item.id
    })
    setCartItems(tempCartItems);

    const exitInOrderItems = orderItems.every((element) => {
      return element.id === item.id;
    });

    if(exitInOrderItems === true){
      const tempOrderItms = orderItems.filter((element)=>{
        return element.id !== item.id
      })
    }
  }
  return (
    <div className={styles.card}>
      <div className={`${styles.box_10} ${styles.center}`}>
        {item.checked === false && (
          <input
            type="checkbox"
            className={styles.check_btn}
            onClick={() => {
              const tempCart = cartItems.map((element)=>{
                if(element.id === item.id){
                  element.checked = true;
                  return element
                }
                return element
              })
              setCartItems(tempCart)
            }}
          ></input>
        )}
        {item.checked === true && (
          <input
            type="checkbox"
            checked="checked"
            className={styles.uncheck_btn}
            onClick={() => {
              const tempCart = cartItems.map((element)=>{
                if(element.id === item.id){
                  element.checked = false;
                  return element
                }
                return element
              })
              setCartItems(tempCart)
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
                element.amount = element.amount - 1;
                return element;
              }
              return element;
            });
            setCartItems(temp);
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
                element.amount = element.amount + 1;
                return element;
              }
              return element;
            });
            setCartItems(temp);
          }}
        >
          +
        </button>
      </div>
      <div className={`${styles.box_15}`}>{item.Product.price}元</div>
      <div className={`${styles.box_5} ${styles.center}`}>
        <button className={styles.delete_btn} onClick={()=>{hadleDelete()}}>x</button>
      </div>
    </div>
  );
}
