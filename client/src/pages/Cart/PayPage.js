//modules
import React, {useEffect, useState} from "react";

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
  
  //packed all the state in a object, much more efficient to sent as parameter
  const [recInfo, setRecInfo] = useState(
    { 
      name: "", 
      phone: "", 
      address: "", 
      delivery: "", 
      post: "", 
      email: "",
      comment: "",
  })
  const [recipientForm, setRecipientForm] = useState(false);
  useEffect(()=>{
    console.log(recInfo)
  },[])

  function submitHandler(){

  }

  return (
    <div>
      {recipientForm === true && (
        <RecipientForm
        setRecipientForm= {setRecipientForm}
         setRecInfo = {setRecInfo}
         recInfo ={recInfo}
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
          <DeliveryInfo 
            setRecInfo={setRecInfo} 
            recInfo={recInfo}>
          </DeliveryInfo>
        </div>
        <div className={`${payStyles.box_dark}`}>
          <RecipientInfo
            setRecipientForm={setRecipientForm}           
            recInfo={recInfo}
            setRecInfo={setRecInfo}> 
          </RecipientInfo>
        </div>
        <div className={payStyles.box_submit_btn}>
          <button className={payStyles.submit_btn} onClick={()=>{
            submitHandler()
          }}>確認付款</button>
        </div>
      </section>
    </div>
  );
}



