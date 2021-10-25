import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { getMe } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import { clearAuthLocal, getAuthLocal, getCartLocal } from "../../utils";
import style from "./NavBar.css";

function NavBar() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

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
      setUser(res.data);
    });
  }, []);

  function handleLogout() {
    setUser(null);
    clearAuthLocal();
  }

  return (
    <nav className="nav">
      <div>
        <a href="/">
          <img
            style={{ width: "150px", marginTop: "50px", marginBottom: "80px" }}
            alt="title"
            src="../../img/logo.png"
          ></img>
        </a>
      </div>
      <div className="product-nav">
        <div>
          <span>
            <a className="ftsz-24 ft-TC" href="/">
              首頁
            </a>
          </span>
        </div>
        <div>
          <span>
            <a className="ftsz-24 ft-TC" href="/books">
              書籍
            </a>
          </span>
        </div>
        <div>
          <span>
            <a className="ftsz-24 ft-TC" href="/stationaries">
              文具
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
