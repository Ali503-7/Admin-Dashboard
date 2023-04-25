import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SideBar = () => {
  return (
    <div className="w-2/12 flex flex-col gap-32">
      <div className="category A-side_compo">
        <h3>Category menu</h3>
        <ul>
          <li>Bakery</li>
          <li>Fruit and vegetables</li>
          <li>Meat and fish</li>
          <li>Drinks</li>
          <li>Kitchen</li>
        </ul>
        <button className="btn-c1 btn-md arrow">
          More Categories
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="best_selling--products A-side_compo">
        <h3>Best selling products</h3>
        <ul>
          <li>Kitchen</li>
          <li>Meat and fish</li>
          <li>Special nutrition</li>
          <li>Pharmacy</li>
          <li>Baby</li>
        </ul>
        <button className="btn-c1 btn-md arrow">
          More products
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="best_from--famers A-side_compo">
        <h3>Best from Farmers</h3>
        <ul>
          <li>Carrots</li>
          <li>Tomatoes</li>
          <li>Potatoes</li>
          <li>Chicken</li>
          <li>Pork</li>
        </ul>
        <button className="btn-c1 btn-md arrow">
          More products
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
