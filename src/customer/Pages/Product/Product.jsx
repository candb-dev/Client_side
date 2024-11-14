import React from 'react';
import ProductHd from '../../components/ProductsPage/ProductHd';
import ProductDisplay from '../../components/ProductsPage/ProductDisplay';
import ProductDescription from '../../components/ProductsPage/ProductDescription';

// import RelatedProduct from './RelatedProduct;'

const Product = () => {
   const singleProduct = {
    "_id": "65fd953c10bf37b002f4d19f",
    "id": 2,
    "name": "Air Jordan XXXVII Low PF",
    "images": [
        "https://res.cloudinary.com/danwfu3n6/image/upload/v1711117627/vrk8zr1bk5ryinwln3wv.webp",
        "https://res.cloudinary.com/danwfu3n6/image/upload/v1711117627/fpd3q0huhbhiyyvgu2gt.webp",
        "https://res.cloudinary.com/danwfu3n6/image/upload/v1711117627/xz3uqm5klu4t5qtjhqyc.webp",
        "https://res.cloudinary.com/danwfu3n6/image/upload/v1711117627/qsnfgndsnbol04fjn4pu.webp"
    ],
    "category": "sports",
    "description": "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.",
    "new_price": "16295",
    "old_price": "24999",
    "available": true,
    "sizes": [
        "UK 12",
        "UK 9",
        "UK 10",
        "UK 11"
    ],
    "date": "2024-03-22T14:27:08.774Z",
    "__v": 0
};


  return (
    <section className=' mx-auto max-w-[unset] px-1 lg:px-20 3xl:px-0 py-5 bg-white'>
        <div>
        <ProductHd product={singleProduct}/>
        <ProductDisplay product={singleProduct}/>
        {/* <ProductDescription product={singleProduct}/> */}
        {/* <RelatedProduct products={products} category={singleProduct.category}/> */}
      </div>
    </section>
  )
}

export default Product