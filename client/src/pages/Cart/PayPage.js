import React, { useEffect, useState, useContext } from "react";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import { getMe } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import {
  setCartLocal,
  getCartLocal,
  getAuthLocal,
  setAuthLocal,
} from "../../utils";
import styles from "../../css/cart.module.css";
import payStyles from "../../css/PayPage.module.css";
import cross from "../../img/cross.png";

export default function PayPage(props) {
  const sum = props.sum;
  const setSum = props.setSum;
  const orderItems = props.orderItems;
  const setOrderItems = props.setOrcerItems;
  const cartItems = props.cartItems;
  const setPage = props.setPage;

  const [recipientForm, setRecipientForm] = useState(false);
  const [recName, setRecName] = useState();
  const [recAddress, setRecAddress] = useState();
  const [recPhone, setRecPhone] = useState();
  const [recPost, setRecPost] = useState();

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
        <div className={`${payStyles.box}`}></div>
        <div className={`${payStyles.box_dark}`}></div>
        <div className={`${payStyles.box_dark}`}></div>
        <div className={`${payStyles.box_dark}`}>
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
                    蔡恂藝
                  </div>
                  <div className={`${payStyles.box_recipient_item}`}>
                    0906808380
                  </div>
                  <div className={`${payStyles.box_recipient_item}`}>
                    台北市大安區
                  </div>
                  <div className={`${payStyles.box_recipient_item}`}>
                    購買人: 同收件人
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
        </div>
      </section>
    </div>
  );
}

function PayCard(props) {
  const item = props.item;

  return (
    <div className={`${payStyles.payCard}`}>
      <div className={`${styles.box_60} ${styles.center}`}>
        <img className={`${payStyles.payCard_img}`} src={item.image}></img>
        <span>{item.name}</span>
      </div>
      <div className={`${styles.box_20} ${styles.center}`}>{item.amount}</div>
      <div className={`${styles.box_20} ${styles.center}`}>{item.price}</div>
    </div>
  );
}

function RecipientForm(props) {
  const setRecName = props.setRecName;
  const setRecAddress = props.setRecAddress;
  const setRecPhone = props.setRecPhone;
  const setRecPost = props.setRecPost;
  const setRecipientForm = props.setRecipientForm;
  const recName = props.recName;
  const recPhone = props.recPhone;
  const recPost = props.recPost;
  const recAddress = props.recAddress;

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
                value={recName}
                onChange={(e) => {
                  setRecName(e.target.value);
                }}
              ></input>
            </div>
            <div className={`${payStyles.rec_text_input_box}`}>
              <label className={`${payStyles.rec_label}`}>連絡電話 *</label>
              <br></br>
              <input
                className={`${payStyles.rec_text_input}`}
                value={recPhone}
                onChange={(e) => {
                  setRecPhone(e.target.value);
                }}
              ></input>
            </div>
            <div className={`${payStyles.rec_text_input_box}`}>
              <label className={`${payStyles.rec_label}`}>收件地址 *</label>
              <br></br>
              <input
                className={`${payStyles.rec_text_input}`}
                value={recAddress}
                onChange={(e) => {
                  setRecAddress(e.target.value);
                }}
              ></input>
            </div>
            <div className={`${payStyles.rec_text_input_box}`}>
              <label className={`${payStyles.rec_label}`}>郵遞區號 *</label>
              <br></br>
              <input
                type="text"
                className={`${payStyles.rec_number_input}`}
                value={recPost}
                onChange={(e) => {
                  setRecPost(e.target.value);
                }}
              ></input>
            </div>
          </form>
        </div>
        <div className={`${payStyles.buttom_container}`}>
          <div>
            <button className={`${payStyles.cancel_btn}`}>取消</button>
          </div>
          <div>
            <button className={`${payStyles.submit_btn}`}>完成</button>
          </div>
        </div>
      </div>
    </div>
  );
}
