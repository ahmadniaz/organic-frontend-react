import React from "react";
import WomenProducts from "../../components/products/WomenProducts";
import IconGrid from "../../components/items/IconGrid";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Women = () => {
  return (
    <>
      <div
        style={{ marginTop: "10%", marginLeft: "auto", marginRight: "auto" }}
      >
        <WomenProducts />
        <IconGrid />
        <NewsLetter />
      </div>
    </>
  );
};

export default Women;
