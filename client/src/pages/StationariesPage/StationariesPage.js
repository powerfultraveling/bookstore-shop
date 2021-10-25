import { useEffect, useState } from "react";
import { getProducts } from "../../API";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./StationariesPage.module.css";

function StaCard(props) {
  const { product } = props;
  return (
    <div className={styles.product_card}>
      <a href={`/stationary/${product.id}`}>
        <img src={product.image} className={styles.product_card_image}></img>
      </a>

      <a href={`/stationary/${product.id}`}>
        <div className={styles.product_card_cover}>
          <h2 className={styles.sta_title}>{product.name}</h2>
        </div>
      </a>
    </div>
  );
}
function StationariesPage() {
  const [stationaries, setStationaries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/stationaries")
      .then((res) => {
        return res.json();
      })
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
          <StaCard product={item} />
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
}

export default StationariesPage;
