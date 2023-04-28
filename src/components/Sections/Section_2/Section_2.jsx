import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Customers_Slider from "../../Bata_components/Customers_slider/Customers_Slider";
import React from 'react'

const Section_2 = () => {
  return (
    <div>
      <div className="container flex flex-row items-center justify-between">
        <h3 className=" font-poppins text-[18px] font-[600] text-c1-A">
          Our customers says
        </h3>
        <button className="btn-c1 btn-md arrow">
          Button <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div>
        <Customers_Slider />
      </div> 
    </div>
  );
}

export default Section_2