import React from "react";
import MenProducts from "../../components/products/MenProducts";
import IconGrid from "../../components/items/IconGrid";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Men = () => {
  return (
    <>
      <div
        style={{ marginTop: "10%", marginLeft: "auto", marginRight: "auto" }}
      >
        <MenProducts />
        <IconGrid />
        <NewsLetter />
      </div>
    </>
  );
};

export default Men;
