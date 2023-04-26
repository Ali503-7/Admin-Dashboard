import React, { useEffect, useState } from "react";

const Product_box = () => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const Products = () => {
    return data ? (
      data.slice(0, 6).map((item) => (
        <div
          className="product_box h-fit w-[269px] rounded-xl border border-c1-D p-4 mb-20"
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
              <h4 className="truncate font-poppins text-[15px] font-[500] text-c1-A">
                {item.title}
              </h4>
              <p className="h-5 overflow-hidden truncate font-sans text-[12px]">
                {item.description}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-[18px] text-c1-A font-poppins font-[600]">
                <span className="mr-1">{item.price}</span>
                <span>USD</span>
              </div>
              <button className="btn-c2 btn-sm">Buy now</button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>loading</div>
    );
  };

  return (
    <div className="mt-[125px] flex flex-wrap justify-between">
      {Products()}
    </div>
  );
};

export default Product_box;
