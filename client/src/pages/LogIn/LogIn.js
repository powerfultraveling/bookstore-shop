import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import Footer from "../../components/Footer/Footer";
import styles from "../../css/LogIn.module.css";
import { logIn, getMe } from "../../API";
import { setAuthLocal, saveUser } from "../../utils";
import { AuthContext } from "../../contexts";
import pencil from "../../img/pencil.png";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErroeMessage] = useState("");

  const { setUser } = useContext(AuthContext);

  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    logIn(email, password).then((data) => {
      setAuthLocal(data.token);
      getMe(data.token).then((data) => {
        setUser(data);
      });
      history.push("/");
    });
  }

  function responseGoogle(response) {
    console.log(response);
    console.log(response.tokenId);
    fetch("http://localhost:3001/api/google/token", {
      method: "POST",
      body: JSON.stringify({
        token: response.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.toString());
      });
  }

  return (
    <div>
      <section className={styles.main_sec}>
        <div className={styles.login_box}>
          <div className={styles.back_box}>
            <a href="/" className={styles.back}>
              回上一頁
            </a>
          </div>
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <div className={styles.logo_box}>
              <img src={pencil}></img>
            </div>
            <div>
              <span className={styles.title}>用不二堂帳號登入 ?</span>
            </div>
            <div className={styles.text_input_box}>
              <input
                className={styles.text_input}
                type="text"
                placeholder="email*"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.text_input_box}>
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
        <div className={styles.to_register_box}>
          <a href="/join">
            還沒有帳號嗎? <span style={{ color: "brown" }}>註冊</span>
          </a>
        </div>
      </section>
    </div>
  );
}
