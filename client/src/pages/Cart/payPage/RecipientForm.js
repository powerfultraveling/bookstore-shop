//modules
import React,{useState} from "react";

//statics
import payStyles from "../../../css/PayPage.module.css";
import cross from "../../../img/cross.png";


export default function RecipientForm(props) {
    const setRecipientForm = props.setRecipientForm;
    const recInfo = props.recInfo;
    const setRecInfo = props.setRecInfo

    const [formInfo, setFormInfo] = useState({
      name: recInfo.name,
      address: recInfo.Address, 
      phone: recInfo.Phone,
      post: recInfo.Post
    });

    
    function editHandler(){
      setRecInfo({
        ...recInfo,
        name: formInfo.name,
        address: formInfo.address, 
        phone: formInfo.phone, 
        post: formInfo.post
      })
      setRecipientForm(false)
    }
  
    return (
      <div className={`${payStyles.recipientForm}`}>
        <div className={`${payStyles.rec_container}`}>
          <div className={`${payStyles.top_container}`}>
            <div style={{ fontSize: "20px" }}>編輯收件資料</div>
            <div
              onClick={() => {
                setRecipientForm(false);
              }}
            >
              <img className={`${payStyles.exit_btn}`} src={cross}></img>
            </div>
          </div>
          <div className={`${payStyles.form_container}`}>
            <form className={`${payStyles.form_itself}`}>
              <div className={`${payStyles.rec_text_input_box}`}>
                <label className={`${payStyles.rec_label}`}>收件人 *</label>
                <br></br>
                <input
                  className={`${payStyles.rec_text_input}`}
                  value={formInfo.name}
                  onChange={(e) => {
                    setFormInfo({...formInfo, name: e.target.value})
                  }}
                ></input>
              </div>
              <div className={`${payStyles.rec_text_input_box}`}>
                <label className={`${payStyles.rec_label}`}>連絡電話 *</label>
                <br></br>
                <input
                  className={`${payStyles.rec_text_input}`}
                  value={formInfo.phone}
                  onChange={(e) => {
                    setFormInfo({...formInfo, phone: e.target.value})
                  }}
                ></input>
              </div>
              <div className={`${payStyles.rec_text_input_box}`}>
                <label className={`${payStyles.rec_label}`}>收件地址 *</label>
                <br></br>
                <input
                  className={`${payStyles.rec_text_input}`}
                  value={formInfo.address}
                  onChange={(e) => {
                    setFormInfo({
                      ...formInfo,
                      address: e.target.value
                    })
                  }}
                ></input>
              </div>
              <div className={`${payStyles.rec_text_input_box}`}>
                <label className={`${payStyles.rec_label}`}>郵遞區號 *</label>
                <br></br>
                <input
                  type="text"
                  className={`${payStyles.rec_number_input}`}
                  value={formInfo.post}
                  onChange={(e) => {
                    setFormInfo({
                      ...formInfo,
                      post: e.target.value
                    })
                  }}
                ></input>
              </div>
            </form>
          </div>
          <div className={`${payStyles.buttom_container}`}>
            <div>
              <button className={`${payStyles.cancel_btn}`} onClick={()=>{setRecipientForm(false)}}>取消</button>
            </div>
            <div>
              <button className={`${payStyles.submit_btn}`} onClick={()=>{editHandler()}}>完成</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  