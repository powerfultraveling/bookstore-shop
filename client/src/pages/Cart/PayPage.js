import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SmallNavBar from "../../components/smallNavBar/smallNavBar";
import { getMe } from "../../API";
import { AuthContext, CartContext } from "../../contexts";
import { setCartLocal, getCartLocal, getAuthLocal } from "../../utils";
import styles from "./cart.module.css";
import Pay_style from "../../css/PayPage.module.css";

