import React from "react";
import HomeProductCard2 from "./HomeProductCard2/HomeProductCard2";

const PopularProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      imgUrl: "https://picsum.photos/200/300/?blur",
      price: "1500",
    },
    {
      id: 2,
      name: "Product 2",
      imgUrl: "https://picsum.photos/200/300?grayscale",
      price: "2000",
    },
    {
      id: 3,
      name: "Product 3",
      imgUrl: "https://picsum.photos/seed/picsum/200/300",
      price: "3000",
    },
    {
      id: 4,
      name: "Product 4",
      imgUrl: "https://picsum.photos/id/237/200/300",
      price: "4000",
    },
    {
      id: 5,
      name: "Product 5",
      imgUrl: "https://picsum.photos/id/238/200/300",
      price: "4500",
    },
    {
      id: 6,
      name: "Product 6",
      imgUrl: "https://picsum.photos/id/239/200/300",
      price: "5000",
    },
    {
      id: 7,
      name: "Product 7",
      imgUrl: "https://i.postimg.cc/SKg41d0W/react-logo.png",
      price: "5500",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 lg:p-12">
      {products.map((product) => (
        <HomeProductCard2
          key={product.id}
          imgUrl={product.imgUrl}
          price={product.price}
          productTitle={product.name}
        />
      ))}
    </div>
  );
};

export default PopularProductGrid;
