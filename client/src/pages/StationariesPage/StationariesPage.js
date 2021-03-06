//modules
import { useEffect, useState } from "react";

//functions
import { getAllStationaries } from "../../API";

//components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";
import { ProductPageCard } from "../../components/Card/ProductPageCard";

//static
import styles from "../../css/StationariesPage.module.css";


function StationariesPage() {
  const [stationaries, setStationaries] = useState([]);
  useEffect(() => {
    getAllStationaries()
      .then((data) => {
        console.log(data);
        setStationaries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <section className={styles.sta_section}>
        {stationaries.map((item) => (
          <ProductPageCard product={item} />
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
}

export default StationariesPage;
