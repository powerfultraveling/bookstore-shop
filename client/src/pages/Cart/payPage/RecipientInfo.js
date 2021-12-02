//modules
import React from "react";

//statics
import payStyles from "../../../css/PayPage.module.css";
import styles from "../../../css/cart.module.css";
import cross from "../../../img/cross.png";

export default function RecipientInfo(props){
    const setRecipientForm = props.setRecipientForm;
    const recName= props.recName
    const recAddress=props.recAddress
    const recPhone=props.recPhone
    const recPost=props.recPost

    return (
        <div className={`${payStyles.box_container}`}>
        <div className={`${payStyles.box_block}`}>
          <div className={`${payStyles.box_title}`}>收件資訊:</div>
          <div
            className={`${payStyles.box_recipient}`}
            onClick={() => {
              setRecipientForm(true);
            }}
          >
            <div>
              <div className={`${payStyles.box_recipient_item}`}>
                <span className={payStyles.ft_600}>收件人</span>: {recName}
              </div>
              <div className={`${payStyles.box_recipient_item}`}>
              <span className={payStyles.ft_600}>連絡電話</span>: {recPhone}
              </div>
              <div className={`${payStyles.box_recipient_item}`}>
              <span className={payStyles.ft_600}>地址</span>: {recAddress}
              </div>
              <div className={`${payStyles.box_recipient_item}`}>
              <span className={payStyles.ft_600}>購買人</span>: {recName}
              </div>
            </div>
            <div className={`${styles.center}`}>
              <span className={`${payStyles.edit_btn}`}>編輯</span>
            </div>
          </div>
        </div>
        <div>
          <div className={`${payStyles.box_title}`}>
            給不二家的訊息或注意事項:
          </div>
          <textarea className={`${payStyles.order_comment}`}></textarea>
        </div>
      </div>

    )
}