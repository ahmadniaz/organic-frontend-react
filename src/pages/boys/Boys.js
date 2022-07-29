import React from "react";
import BoysProducts from "../../components/products/BoysProducts";
import IconGrid from "../../components/items/IconGrid";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Boys = () => {
  return (
    <>
      <div
        style={{ marginTop: "10%", marginLeft: "auto", marginRight: "auto" }}
      >
        <BoysProducts />
        <IconGrid />
        <NewsLetter />
      </div>
    </>
  );
};

export default Boys;
