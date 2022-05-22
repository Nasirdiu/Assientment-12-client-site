import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const PurchaseProduct = () => {
  const [purchase, setPurchase] = useState([]);
  const {id}=useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/product/`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }, []);
  return (
    <div>
      <h1>Purschase </h1>
    </div>
  );
};

export default PurchaseProduct;
