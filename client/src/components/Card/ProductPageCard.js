import React from "react";
import styles from "../../css/StationariesPage.module.css";

export function ProductPageCard(props) {
    const { product } = props;
    return (
      <div className={styles.product_card}>
        <a href={`/stationary/${product.id}`}>
          <img src={product.image} className={styles.product_card_image}></img>
        </a>
  
        <a href={`/stationary/${product.id}`}>
          <div className={styles.product_card_cover}>
            <h2 className={styles.sta_title}>{product.name}</h2>
          </div>
        </a>
      </div>
    );
  }