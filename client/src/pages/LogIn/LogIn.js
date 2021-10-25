import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import Footer from "../../components/Footer/Footer";
import styles from "../../css/LogIn.module.css";
import { logIn, getMe } from "../../API";
import { setAuthLocal, saveUser } from "../../utils";
import { AuthContext } from "../../contexts";

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

  return (
    <div>
      <SmallNavBar></SmallNavBar>
      <section className={styles.main_sec}>
        <div className={styles.login_box}>
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <div>
              <h2 className={styles.title}>登入</h2>
            </div>
            <div>
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
            <div>
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
            <div>
              <input
                className={styles.login_btn}
                type="submit"
                value="Sign In"
              ></input>
            </div>
            {errorMessage && <span className="error">{errorMessage}</span>}
          </form>
        </div>
        <div className={styles.register_box}>
          <span>
            還沒有帳號嗎?{" "}
            <a href="#" style={{ color: "blue" }}>
              註冊
            </a>
          </span>
        </div>
      </section>
    </div>
  );
}
