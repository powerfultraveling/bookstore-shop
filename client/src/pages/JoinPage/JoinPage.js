//modules
import { useState} from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "react-google-login";

//redux-store
import { setUser } from "../../redux/user/userAction";

//components
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import Footer from "../../components/Footer/Footer";

//functions
import { register, getMe, googleAuth } from "../../API";
import { setAuthLocal } from "../../utils";


//static
import styles from "../../css/LogIn.module.css";
import pencil from "../../img/pencil.png";

function Join() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErroeMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    register(firstName, lastName, email, password).then((data) => {
      setAuthLocal(data);
      setFirstName("");
      setLastName("");
      setPassword("");
      setEmail("");
    });
  }

  function responseGoogle(response) {
    console.log(response.profileObj);
    const userInfo = response.profileObj;
    googleAuth(userInfo.familyName, userInfo.givenName, userInfo.email)
      .then((data) => {
        setAuthLocal(data.token);
        getMe(data.token)
          .then((data) => {
            dispatch(setUser(data));
          })
          .catch((err) => {
            console.log(err.toString());
          });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <section className={styles.main_sec}>
        <div className={styles.register_box}>
          <div className={styles.back_box}>
            <a href="/login" className={styles.back}>
              回上一頁
            </a>
          </div>
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <div className={styles.logo_box}>
              <img src={pencil}></img>
            </div>
            <div>
              <span className={styles.title}>註冊不二堂帳號?</span>
            </div>
            <div className={styles.text_input_box}>
              <label>Email</label>
              <br />
              <input
                className={styles.text_input}
                type="text"
                placeholder="信箱"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.text_input_box}>
              <label>帳號</label>
              <br />
              <input
                className={styles.text_input}
                type="text"
                placeholder="帳號名稱*"
                value={email}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.text_input_box}>
              <label>password</label>
              <br />
              <input
                className={styles.text_input}
                type="password"
                placeholder="Passowrd*"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.text_input_box}>
              <input
                className={styles.login_btn}
                type="submit"
                value="Sign In"
              ></input>
            </div>
            <div className={styles.googleBox}>
              <span>用 google 登入?</span>
            </div>
            <GoogleLogin
              clientId="665788213127-6th3abpmu8cfjs4k0s5u86i35klfp682.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            {errorMessage && <span className="error">{errorMessage}</span>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Join;
