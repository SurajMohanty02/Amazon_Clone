import React from "react";
import "./Banner.css";
import Product from "./Product";
const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/17thNov/M51/PriceChange/P38983965_IN_WLME_SamsungGalaxy_M51_PC_1500x600._CB415303726_.jpg"
        )`,
        backgroundSize: "cover",
        backgroundRepeat: "none",
      }}
    >
      <Product />
    </header>
  );
};

export default Banner;
