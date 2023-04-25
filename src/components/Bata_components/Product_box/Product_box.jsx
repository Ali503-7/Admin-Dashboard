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
      data.map((item) => (
        <div className="product_box" key={item.id}>
          <div className="">
            <img src={item.image} alt="" />
          </div>
          <div className="">
            <div className="">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            <div className="">
              <div className="">
                <p>{item.price}</p>
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

  return <div className="">{Products()}</div>;
};

export default Product_box;
