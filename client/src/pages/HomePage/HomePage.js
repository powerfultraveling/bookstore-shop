//modules
import React, { useEffect } from "react";
import styles from "../../css/Homepage.module.css";

//components
import TopNav from "../../components/TopNav/TopNav";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import HomeCorousel from "./HomeCorousel";



function HomePage() {
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <section className={`${styles.landing}`}>
        <div className={`${styles.landing_cover}`}>
          <HomeCorousel></HomeCorousel>
        </div>
      </section>
      <div className={styles.center}>
        <div style={{textAlign: "left", width: "1000px"}} className={styles.section_title}>
          十一月的精選物
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


export default HomePage;
