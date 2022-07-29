import React from "react";
import ProductItems from "../../components/products/ProductItems";
import IconGrid from "../../components/items/IconGrid";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Store = () => {
  return (
    <>
      <div
        style={{ marginTop: "10%", marginLeft: "auto", marginRight: "auto" }}
      >
        <ProductItems />
        <IconGrid />
        <NewsLetter />
      </div>
    </>
  );
};

export default Store;
