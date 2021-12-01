import React, { useEffect,  useState } from "react";
import { Link } from "react-router-dom";

import { getMe } from "../../API";
import { clearAuthLocal, getAuthLocal, getCartLocal } from "../../utils";
import style from "./NavBar.css";

function NavBar() {
  const [isLoading, setIsLoading] = useState(true);




  function handleLogout() {
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
