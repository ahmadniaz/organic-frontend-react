import React from "react";
import GirlsProducts from "../../components/products/GirlsProducts";
import IconGrid from "../../components/items/IconGrid";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Girls = () => {
  return (
    <>
      <div
        style={{ marginTop: "10%", marginLeft: "auto", marginRight: "auto" }}
      >
        <GirlsProducts />
        <IconGrid />
        <NewsLetter />
      </div>
    </>
  );
};

export default Girls;
