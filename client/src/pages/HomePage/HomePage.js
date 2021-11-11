import React, { useEffect } from "react";
import styles from "../../css/Homepage.module.css";

import TopNav from "../../components/TopNav/TopNav";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import cover2 from "../../img/cover2.png"
import cover1 from "../../img/cover1.png"
import cover3 from "../../img/cover3.png"

function HomePage() {
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <section className={`${styles.landing}`}>
        <div className={`${styles.landing_cover}`}>
          <div className={styles.scroll_box}>
            <img src={cover2} className={styles.landing_img}></img>
            <img src={cover1} className={styles.landing_img}></img>
            <img src={cover3} className={styles.landing_img}></img>
          </div>
        </div>
      </section>
      <div className={styles.center}>
        <div style={{textAlign: "left", width: "100%"}}>
          <span>十一月的精選物</span>
        </div>
        <div className={styles.scroll_box}>
          <div className={styles.best_product}></div>
          <div className={styles.best_product}></div>
          <div className={styles.best_product}></div>
          <div className={styles.best_product}></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

function HomeCard(){
  
}

export default HomePage;
