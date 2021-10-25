import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../../components/Footer/Footer";
import AdminTopNav from "../../../../components/AdminTopNav/AdminTopNav";
import { getSingleProduct } from "../../../../API";
import style from "./style.css";

export default function AdminProductEdit() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productAmount, setProductAmount] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const { id } = useParams();

  //get product information
  useEffect(() => {
    getSingleProduct(id).then((res) => {
      console.log(res);
      let category;
      if (res.categoriesId === 2) {
        category = "stationary";
      } else {
        category = "book";
      }

      setProductName(res.name);
      setProductPrice(res.price);
      setProductDescription(res.description);
      setProductAmount(res.amount);
      setProductCategory(category);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    let category;
    if (productCategory === "book") {
      category = 1;
    } else {
      category = 2;
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("image", productImage);
    formData.append("amount", productAmount);
    formData.append("category", category);
    formData.append("description", productDescription);

    fetch("http://localhost:3001/api/product/add", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "multipart/form-data",
      },
    }).then((res) => res.json());
  }

  return (
    <div>
      <AdminTopNav></AdminTopNav>
      <section className="admin-product-sec">
        <div className="admin-add-form-box">
          <div>
            <h2 className="add-page-title">編輯商品</h2>
          </div>
          <form
            className="admin-product-form"
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div>
              <label>* 商品名稱: </label>
              <input
                className="text-input"
                placeholder="name"
                value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>* 價錢: </label>
              <input
                className="text-input"
                placeholder="price"
                value={productPrice}
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>* 數量: </label>
              <input
                className="text-input"
                placeholder="amount"
                value={productAmount}
                onChange={(e) => {
                  setProductAmount(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <select
                value={productCategory}
                onChange={(e) => {
                  setProductCategory(e.target.value);
                }}
              >
                <option>book</option>
                <option>stationary</option>
              </select>
            </div>
            <div>
              <textarea
                className="input-textarea"
                placeholder="description"
                value={productDescription}
                onChange={(e) => {
                  setProductDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div>
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setProductImage(file);
                }}
              ></input>
            </div>
            <div className="input-btn-box">
              <input type="submit" value="submit" className="input-btn"></input>
              <a href="/admin/product">取消編輯</a>
            </div>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
