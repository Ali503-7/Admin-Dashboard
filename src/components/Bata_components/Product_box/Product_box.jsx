import React, { useState } from "react";
import { products } from "../../../../public/API/products";

const Product_box = () => {
  const [data, setData] = useState(null);

  const ProductsAPI = async () => {
    await products();
  };

  setData(ProductsAPI());

  console.log(data);

  function repeat(i, any) {
    let array = [];
    for (let g = 0; g < i; g++) {
      array.push(any);
    }
    return array;
  }

  const loading_boxes = (
    <div className="product_box mb-28 h-fit w-[269px] animate-pulse rounded-xl border border-c1-D p-4">
      <div className="mb-4 h-[180px] w-[237px] bg-c1-F"></div>
      <div>
        <div className="mb-4">
          <div className="mb-2 h-[5px] w-28 rounded bg-c1-D"></div>
          <div className="h-[5px] w-52 rounded bg-c1-D"></div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex">
            <div className="mr-1 h-[20px] w-9 rounded bg-c1-D"></div>
            <div className="mr-1 h-[20px] w-5 rounded bg-c1-D"></div>
          </div>
          <div className="mr-1 h-[35px] w-20 rounded bg-c1-D"></div>
        </div>
      </div>
    </div>
  );

  const Products = () => {
    return data
      ? data.map((item) => (
          <div
            className="product_box mb-20 h-fit w-[269px] rounded-xl border border-c1-D p-4"
            key={item.id}
          >
            <div className="mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-[180px] w-[237px]"
              />
            </div>
            <div>
              <div className="mb-4">
                <h4 className=" font-poppins text-[15px] font-[500] text-c1-A">
                  {item.title}
                </h4>
                <p className="h-5 overflow-hidden truncate font-sans text-[12px]">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="font-poppins text-[18px] font-[600] text-c1-A">
                  <span className="mr-1">{item.price}</span>
                  <span>USD</span>
                </div>
                <button className="btn-c2 btn-sm">Buy now</button>
              </div>
            </div>
          </div>
        ))
      : repeat(6, loading_boxes);
  };

  return (
    <div className="mt-[125px] flex h-[810px] flex-wrap justify-between overflow-hidden">
      {Products()}
    </div>
  );
};

export default Product_box;
