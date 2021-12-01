//modules
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, useStore } from "react-redux";

//redux-store
import { setCart } from "../../redux/cart/cartAction";

//components
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import TopNav from "../../components/TopNav/TopNav";
import Footer from "../../components/Footer/Footer";

//functions
import { getSingleProduct, addItemToCart } from "../../API";
import { setCartLocal, getCartLocal } from "../../utils";

import style from "./style.css";

let idNumber = 0;
function ProPageStationary() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user.user);
  const cart = useSelector((state)=>state.cart.cart);
  const cartId = useSelector((state)=>state.cart.cartId);
  const { id } = useParams();//product id

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

    const cartItem = {
      cartId: cartId,
      productId: productId,
    }

    
    addItemToCart(userId, productId)
    .then((res)=>{
      return res.json
    })
    .then((data)=>{
      dispatch(setCart([...cart, cartItem], cartId))
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
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
