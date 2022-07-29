import React from "react";
import ControlledCarousel from "../../components/carasoul/heroslider/ControlledCarousel";
import ItemGrids from "../../components/items/ItemGrids";
import ItemGrids2 from "../../components/items/ItemGrids2";
import IconGrid from "../../components/items/IconGrid";
import BestSellerProducts from "../../components/products/BestSellerProducts";
import ControlledTestimonial from "../../components/carasoul/testimonials/ControlledTestimonials";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Home = () => {
  return (
    <>
      <ControlledCarousel style={{ marginTop: "5%" }} />
      <ItemGrids />
      <ItemGrids2 />
      <IconGrid />
      <BestSellerProducts />
      <ControlledTestimonial />

      <NewsLetter />
    </>
  );
};
export default Home;
