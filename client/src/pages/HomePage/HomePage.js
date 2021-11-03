import React, { useEffect } from "react";
import styles from "../../css/Homepage.module.css";

import TopNav from "../../components/TopNav/TopNav";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <section className={`${styles.landing}`}>
        <div className={`${styles.landing_cover}`}>
          <div className={`${styles.landing_info_box}`}>
            <div>
              <h1 className={`${styles.landing_title}`}></h1>
            </div>
            <div>
              <p></p>
            </div>
            <div>{/* <button className="read-btn">read</button> */}</div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
