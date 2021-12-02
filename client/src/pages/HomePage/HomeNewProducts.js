//modules
import React, { useEffect, useState } from "react";

//functions
import { getProducts } from "../../API";

//statics
import styles from "../../css/Homepage.module.css";

export default function HomeNewProducts(){
    const [newProducts, setNewProducts] = useState([]);
    
    useEffect(()=>{
        getProducts()
        .then((data)=>{
            console.log(data)
        })
    },[])

    return(
      <div className={styles.scroll_box}>
        <div className={styles.best_product}></div>
        <div className={styles.best_product}></div>
        <div className={styles.best_product}></div>
        <div className={styles.best_product}></div>
      </div>

    )
}