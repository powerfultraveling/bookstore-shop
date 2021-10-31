import React, { useEffect, useContext, useState } from "react";
import { getMe } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import { clearAuthLocal, getAuthLocal, getCartLocal } from "../../utils";
import styles from "./TopNav.module.css";

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
      console.log(res.data);
      setUser(res.data);
    });
  }, []);

  function handleLogout() {
    setUser(null);
    clearAuthLocal();
  }
  return (
    <div className={styles.Top_nav}>
      <div className={styles.top_nav_block}>
        <div className={styles.top_nav_user}>
          {user && (
            <div>
              <span onClick={handleLogout}>
                <a className={styles.login_box} href="/logout">
                  登出
                </a>
              </span>
              <a href={`/cart`}>
                <img
                  src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/ffffff/external-cart-furniture-vitaliy-gorbachev-fill-vitaly-gorbachev-2.png"
                  alt="cart"
                  style={{ width: "20px", height: "auto", marginLeft: "5px" }}
                />
              </a>
            </div>
          )}
          {!user && (
            <div className={styles.login_box}>
              <a href="/login">登入 / 註冊</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
