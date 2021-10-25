import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import TopNav from "../../components/TopNav/TopNav";
import Footer from "../../components/Footer/Footer";
import { getSingleProduct } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import { setCartLocal, getCartLocal } from "../../utils";
import style from "./style.css";

let idNumber = 0;
function ProPageStationary() {
  const [product, setProduct] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id).then((data) => {
      console.log(data);
      setProduct(data);
    });
  }, []);

  function handleAddToCart() {
    console.log(user);
    const userId = user.id;
    const productId = product.id;

    fetch("http://localhost:3001/api/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
      }),
    });
  }

  return (
    <div>
      <TopNav></TopNav>
      <SmallNavBar></SmallNavBar>
      <section className="product-sec">
        <div className="product">
          <div>
            <img src={product.image} className="productPage-image"></img>
          </div>
          <div className="product-info">
            <div>
              <h1 className="productPage-name">{product.name}</h1>
              <span className="productPage-price">${product.price}</span>
            </div>
            <div>
              <p>{product.description}</p>
            </div>
            <div>
              <button className="addToCart-btn" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default ProPageStationary;
