import { useEffect, useState } from "react";
import { getProducts } from "../../API";
import style from "./style.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function Card(props) {
  const product = props.product;
  return (
    <div className="card">
      <div className="image-box">
        <img className="card-image" src={product.image} alt="card"></img>
      </div>
      <div>
        <div>{product.title}</div>
        <div>${product.price}</div>
      </div>
    </div>
  );
}

function BooksPage() {
  const [products, setProdocts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProdocts(data);
    });
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <section>
        {products.map((item) => (
          <Card product={item} />
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
}

export default BooksPage;
