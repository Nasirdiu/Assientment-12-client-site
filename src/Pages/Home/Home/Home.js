import React from "react";
import useProducts from "../../../hooks/useProducts";
import Tools from "../../Tools/Tools";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";

const Home = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-3xl text-secondary uppercase text-center font-bold mt-10">
        Tools Parts
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
        {products.slice(0, 6).map((product) => (
          <Tools key={product.id} product={product}></Tools>
        ))}
      </div>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
