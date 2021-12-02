//modules
import React from "react";

//statics
import payStyles from "../../../css/PayPage.module.css";
import styles from "../../../css/cart.module.css";


export default function DeliveryInfo(props){
    const {deliveryMethod, setDeliveryMethod} = props;
    function selectHandler(e){
        setDeliveryMethod(e.target.value);
    }
    return(
        <div className={`${payStyles.box_container}`}>
            <div className={`${payStyles.box_block}`}>
            <div>
                選擇貨運方式:
            </div>
            <select id="lang" onChange={(e)=>{selectHandler(e)}} value={deliveryMethod} className={payStyles.select}>
                  <option value="home">宅配到府</option>
               </select>
            </div>
        </div>
    )
}