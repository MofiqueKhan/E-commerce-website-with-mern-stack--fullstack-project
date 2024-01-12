import React from "react";
import "./productcard.css";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover"
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/top/8/t/m/xxl-amrcrochetlacetop-madstitches-apparels-private-limited-original-imagr39r3kfmb5vy.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">
            Madstitches Apparels Private Limited
          </p>
          <p>Party Regular Sleeves Floral Print, Printed Women White...</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className=" font-semibold">$199</p>
          <p className=" line-through opacity-50">$1999</p>
          <p className=" text-green-600 font-semibold">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
