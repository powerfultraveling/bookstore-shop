import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { register } from "../../API";
import { setAuthLocal } from "../../utils";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import Footer from "../../components/Footer/Footer";
import style from "./style.css";

function Join() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [errorMessage, setErroeMessage] = useState("");

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    register(firstName, lastName, email, passWord).then((data) => {
      console.log(data);
      setAuthLocal(data);
      setFirstName("");
      setLastName("");
      setPassword("");
      setEmail("");
    });
  }

  return (
    <div>
      <SmallNavBar></SmallNavBar>
      <section className="form-section">
        <form className="join-form" onSubmit={handleSubmit}>
          <h2 class="title">Join.</h2>
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="firstname*"
              className="input"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="lastname*"
              className="input"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email*"
              className="input"
            ></input>
          </div>
          <div>
            <input
              type="password"
              value={passWord}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password*"
              className="input"
            ></input>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <input type="submit" value="submit" className="submit-btn"></input>
          </div>
          {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
        </form>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Join;
