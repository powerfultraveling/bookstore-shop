import React from "react";
import style from "./style.css";

export default function AdminSideNav() {
  return (
    <div className="sideBar-div">
      <div className="small-block">
        <div className="small-block-title">物流中心</div>
        <div>
          <a>待出貨</a>
        </div>
      </div>
      <div className="small-block">
        <div className="small-block-title">商品管理</div>
        <div className="small-block-item">
          <a href="/admin/product">我的商品</a>
        </div>
        <div>
          <a href="/admin/product/add">新增商品</a>
        </div>
      </div>
      <div className="small-block">
        <div className="small-block-title">物流中心</div>
        <div>
          <a>待出貨</a>
        </div>
      </div>
    </div>
  );
}
