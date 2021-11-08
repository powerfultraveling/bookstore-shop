import { useEffect, useState } from "react";
import { getAllBooks } from "../../API";
import styles from "../../css/StationariesPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { ProductPageCard } from "../../components/Card/ProductPageCard";


function BooksPage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAllBooks().then((data) => {
      console.log(data)
      setBooks(data)
    });
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <section className={styles.sta_section}>
        {books.map((item) => (
          <ProductPageCard product={item} />
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
}

export default BooksPage;
