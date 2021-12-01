import React from "react";

//components
import TopNav from "../../../components/TopNav/TopNav";
import AdminSideNav from "../../../components/AdminSideNav/AdminSideNav";
import AdminTopNav from "../../../components/AdminTopNav/AdminTopNav";


export default function AdminOrder() {
  return (
    <div>
      <TopNav></TopNav>
      <AdminTopNav></AdminTopNav>
      <div>
        <AdminSideNav></AdminSideNav>
      </div>
      <h1>Admin Order</h1>
    </div>
  );
}
