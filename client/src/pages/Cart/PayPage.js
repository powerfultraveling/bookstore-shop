//modules
import React, {useState} from "react";

//components
import RecipientForm from "./payPage/RecipientForm";
import RecipientInfo from "./payPage/RecipientInfo";
import DeliveryInfo from "./payPage/DeliveryInfo";
import PayProcedure from "./payPage/payProcedure";
import PayCard from "./payPage/PayCard";

//statics
import styles from "../../css/cart.module.css";
import payStyles from "../../css/PayPage.module.css";

export default function PayPage(props) {
  const sum = props.sum;
  const orderItems = props.orderItems;
  const setPage = props.setPage;

  const [recipientForm, setRecipientForm] = useState(false);
  const [recName, setRecName] = useState();
  const [recAddress, setRecAddress] = useState();
  const [recPhone, setRecPhone] = useState();
  const [recPost, setRecPost] = useState();
  const [deliveryMethod, setDeliveryMethod] = useState();

  function submitHandler(){

  }

  return (
    <div>
      {recipientForm === true && (
        <RecipientForm
          setRecName={setRecName}
          setRecAddress={setRecAddress}
          setRecPhone={setRecPhone}
          setRecPost={setRecPost}
          setRecipientForm={setRecipientForm}
          recName={recName}
          recAddress={recAddress}
          recPhone={recPhone}
          recPost={recPost}
        ></RecipientForm>
      )}
      <PayProcedure></PayProcedure>
      <section className={payStyles.payPage_main_sec}>
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
          {orderItems.map((item) => (
            <PayCard item={item} />
          ))}
        </div>
        <div className={styles.fl_hr_rt}>
          <span>共計: {sum}</span>
        </div>
        <div className={`${payStyles.box_dark}`}>
          <DeliveryInfo DeliveryMethod={deliveryMethod} setDeliveryMethod={setDeliveryMethod}></DeliveryInfo>
        </div>
        <div className={`${payStyles.box_dark}`}>
          <RecipientInfo setRecipientForm={setRecipientForm}           
          recName={recName}
          recAddress={recAddress}
          recPhone={recPhone}
          recPost={recPost}></RecipientInfo>
        </div>
        <div>
          <button className={payStyles.submit_btn} onClick={()=>{
            submitHandler()
          }}>確認付款</button>
        </div>
      </section>
    </div>
  );
}



