import React, { useEffect, useContext, useState } from "react";
import { getMe } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import { clearAuthLocal, getAuthLocal, getCartLocal } from "../../utils";
import style from "./TopNav.css";

export default function TopNav() {
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
    <div className="Top-nav">
      <div className="top-nav-block">
        <div className="top-nav-user">
          {user && (
            <div>
              <span onClick={handleLogout}>
                <a className=" ft-TC " href="/logout">
                  Log Out
                </a>
              </span>
              <a href={`/cart/${user.id}`}>
                <img
                  src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/ffffff/external-cart-furniture-vitaliy-gorbachev-fill-vitaly-gorbachev-2.png"
                  alt="cart"
                  style={{ width: "20px", height: "auto" }}
                />
              </a>
            </div>
          )}
          {!user && (
            <div>
              <span style={{ marginRight: "10px" }}>
                <a className=" ft-TC" href="/login">
                  登入
                </a>
              </span>
              <span>
                <a className=" ft-TC" href="/join">
                  註冊
                </a>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
