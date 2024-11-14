import React, { useContext, useEffect, useState } from "react";
import ProductImageViewer from "./ImageViewer";
import { MdStar } from "react-icons/md";
import SizeSelector from "./SizeSelector";
import ProductDescription from "./ProductDescription";

const ProductDisplay = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const singleProduct = {
    _id: "65fd953c10bf37b002f4d19f",
    id: 2,
    name: "Air Jordan XXXVII Low PF",
    images: [
      "https://res.cloudinary.com/danwfu3n6/image/upload/v1711117627/vrk8zr1bk5ryinwln3wv.webp",
      "https://res.cloudinary.com/danwfu3n6/image/upload/v1711117627/fpd3q0huhbhiyyvgu2gt.webp",
      "https://res.cloudinary.com/danwfu3n6/image/upload/v1711117627/xz3uqm5klu4t5qtjhqyc.webp",
      "https://res.cloudinary.com/danwfu3n6/image/upload/v1711117627/qsnfgndsnbol04fjn4pu.webp",
    ],
    category: "sports",
    description:
      "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.",
    new_price: "16295",
    old_price: "24999",
    available: true,
    sizes: ["UK 12", "UK 9", "UK 10", "UK 11"],
    date: "2024-03-22T14:27:08.774Z",
    __v: 0,
  };

  const discountPercentage =
    ((product.old_price - product.new_price) / product.old_price) * 100;
  return (
    <section className="pt-10 md:py-0">
      <div className="flex flex-col gap-14 xl:flex-row">
        {/* LEFT SECTION */}
        <div className="sticky flex flex-col justify-start items-center">
        {product.images && product.images.length > 0 && (
          <ProductImageViewer images={product.images} />
        )}
        <div className="flex gap-x-6 mt-4">
              <button
                // onClick={handleAddToCart}
                // disabled={!selectedSize}
                className="btn_outline !rounded hover:bg-green-300 hover:text-black hover:border-black uppercase regular-14 font-anta tracking-widest"
              >
                Add to Cart
              </button>
              <button className="btn_outline !rounded hover:bg-orange-500 hover:text-black hover:border-black uppercase regular-14 font-anta tracking-widest">
                Buy it now
              </button>
            </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col lg:w-3/5 overflow-visible p-4">
          <h3 className="h3 mb-0 text-black font-trucu">{product.name}</h3>
          <p className="text-black">
            <span className="medium-16 text-[black]">Category :</span>{" "}
            {product.category}
          </p>
          <div className="flex gap-x-1 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p className="text-black">(89)</p>
          </div>
          <div className="flex text-secondary gap-x-2 medium-20 my-4">
            {product.new_price < product.old_price ? (
              <>
                MRP:
                <div className="text-black">&#8377;{product.new_price}</div>
                <div className="line-through text-black/80">
                  &#8377;{product.old_price}
                </div>
                <p className="flex justify-center items-center text-[#ff5050]">
                  ({discountPercentage.toFixed(0)}% Off)
                </p>
              </>
            ) : (
              <>
                MRP:
                <div className="text-black">&#8377;{product.new_price}</div>
              </>
            )}
          </div>

          {/* SIZE SECTION */}
          <div className="mb-4">
            {product.sizes && product.sizes.length > 0 && (
              <SizeSelector
                onSizeSelected={setSelectedSize}
                setErrorMessage={setErrorMessage}
                sizes={product.sizes}
              />
            )}
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}

            

            <ProductDescription product={singleProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
