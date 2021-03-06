import React from "react";
import useProducts from "../../../hooks/useProducts";
import Review from "../../Review/Review";
import Tools from "../../Tools/Tools";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import BandCar from "../option/BandCar";
import Option from "../option/Option";
import Ceo from "./Ceo";
import Options from "./Options";

const Home = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="bg-slate-300 ">
      <Banner></Banner>
      <div>
      <h1 className="text-3xl text-accent uppercase text-center font-bold mt-10 ">
        Car Tools 
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 mt-10">
        {products.slice(-6).map((product) => (
          <Tools key={product.id} product={product}></Tools>
        ))}
      </div>
      </div>
      <BusinessSummary></BusinessSummary>
      <Option></Option>
      <Review></Review>
      <Options></Options>
      <BandCar></BandCar>
      <Ceo></Ceo>
      
      
      
    </div>
  );
};

export default Home;
