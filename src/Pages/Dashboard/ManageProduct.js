import React from "react";
import useProducts from "../../hooks/useProducts";
import ManageDelete from "./ManageDelete";
const ManageProduct = () => {
  const [products, setProducts] = useProducts();

  return (
    <div>
      <h1 className="text-2xl text-center text-secondary">
        Manage Product {products.length}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
          {
              products.map(product=><ManageDelete key={product._id} product={product}></ManageDelete>)
          }
      </div>
    </div>
  );
};

export default ManageProduct;
