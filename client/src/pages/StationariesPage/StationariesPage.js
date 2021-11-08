import { useEffect, useState } from "react";
import { getAllStationaries } from "../../API";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "../../css/StationariesPage.module.css";
import { ProductPageCard } from "../../components/Card/ProductPageCard";


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
