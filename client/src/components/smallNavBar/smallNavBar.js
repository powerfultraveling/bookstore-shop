//modules
import React, { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux-store
import { setUser } from "../../redux/user/userAction";

//functions
import { getMe } from "../../API";
import { clearAuthLocal, getAuthLocal, getCartLocal } from "../../utils";
import style from "./style.css";

function SmallNavBar() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthLocal();
    if (!token) {
      console.log("no token");
      return;
    }
    getMe(token).then((res) => {
      if (res.ok === 0) {
        console.log("error");
        return;
      }
      dispatch(setUser(res.data))
    });
  }, []);

  function handleLogout() {
    clearAuthLocal();
    dispatch(setUser(null))
  }

  return (
    <div className="sm-nav-box" style={{ display: "flex" }}>
      <div>
        <a href="/">
          <img
            style={{ width: "80px", marginRight: "30px" }}
            alt="title"
            src="../../img/logo.png"
          ></img>
        </a>
      </div>
      <div className="sm-product-nav">
        <div className="nav-item">
          <span>
            <a className="ft-500" href="/">
              主頁
            </a>
          </span>
        </div>
        <div className="nav-item">
          <span>
            <a className="ft-500" href="/books">
              書籍
            </a>
          </span>
        </div>
        <div className="nav-item">
          <span>
            <a className="ft-500" href="/stationaries">
              文具
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SmallNavBar;
