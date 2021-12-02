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
            setNewProducts(data)
        })
    },[])

    return(
      <div className={styles.scroll_box}>
        {newProducts.map((item)=>
            <HomePageCard item={item}></HomePageCard>
        )}
      </div>
    )
}

function HomePageCard(props){
    const {item} = props;
    return(
        <div className={styles.best_product}>
            {item.name}
        </div>
    )
}