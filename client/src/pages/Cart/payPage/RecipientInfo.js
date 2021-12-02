//modules
import React,{useEffect} from "react";

//statics
import payStyles from "../../../css/PayPage.module.css";
import styles from "../../../css/cart.module.css";


export default function RecipientInfo(props){
    const {recInfo, setRecInfo, setRecipientForm} = props;
    useEffect(()=>{
      console.log(recInfo)
    },[])
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
                <span className={payStyles.ft_600}>收件人</span>: {recInfo.name}
              </div>
              <div className={`${payStyles.box_recipient_item}`}>
              <span className={payStyles.ft_600}>連絡電話</span>: {recInfo.phone}
              </div>
              <div className={`${payStyles.box_recipient_item}`}>
              <span className={payStyles.ft_600}>地址</span>: {recInfo.post + " " + recInfo.address}
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
          <textarea className={`${payStyles.order_comment}`} onChange={(e)=>{setRecInfo({...recInfo, comment: e.target.value})}}></textarea>
        </div>
      </div>

    )
}