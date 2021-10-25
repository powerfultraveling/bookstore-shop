import React, { useEffect, useState } from "react";
import SmallNavBar from "../../../../components/smallNavBar/smallNavBar";
import Footer from "../../../../components/Footer/Footer";
import AdminSideNav from "../../../../components/AdminSideNav/AdminSideNav";
import AdminTopNav from "../../../../components/AdminTopNav/AdminTopNav";
import { getProducts } from "../../../../API";
import style from "./style.css";
function AdminProductCard(props) {
  const { image, name, price, id, handleDelete } = props;
  const host = "http://localhost:3001";
  return (
    <div className="admin-product-card">
      <div className="item-box1"></div>
      <div className="admin-product-info item-box2">
        <div>
          <img className="admin-product-card-img" src={host + image}></img>
        </div>
        <div>
          <h2 className="admin-product-title">{name}</h2>
        </div>
      </div>
      <div className="admin-product-price item-box1">${price}</div>
      <div className="item-box1">1</div>
      <div className="item-box1 admin-product-card-control">
        <button
          className="admin-product-delete"
          onClick={() => {
            handleDelete(id);
          }}
        >
          刪除
        </button>
        <a href={`/admin/product/edit/${id}`}>
          <button class="admin-product-edit">編輯</button>
        </a>
      </div>
    </div>
  );
}

export default function AdminProductAll() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);
  function handleDelete(id) {
    fetch(`http://localhost:3001/api/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }
  return (
    <div class="AdminProductAll">
      <AdminTopNav></AdminTopNav>
      <section className="box">
        <AdminSideNav></AdminSideNav>
        <div className="admin-product-main">
          <div className="admin-product-main-box ">
            <div className="search-box">
              <form>
                <input className="search-input" type="text"></input>
                <input className="submit-btn" type="submit"></input>
              </form>
            </div>
            <div className="flex-box-hr">
              <a className="add-btn" href="/admin/product/add">
                new +
              </a>
            </div>
            <div className="flex-box-hor-lf">
              <span>商品總數: {products.length}</span>
            </div>
            <div className="admin-product-card-box">
              <div className="admin-product-card-labels">
                <div className="item-box1">選取</div>
                <div className="item-box2">商品</div>
                <div className="item-box1">價錢</div>
                <div className="item-box1">數量</div>
                <div className="item-box1">操作</div>
              </div>
              {products.map((item) => (
                <AdminProductCard
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  id={item.id}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
