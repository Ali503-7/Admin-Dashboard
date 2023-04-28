import React from "react";

const Customer_say_box = () => {
  return (
    <div className="relative flex h-[198px] w-[369px] flex-col items-center justify-center rounded-2xl border border-c1-F1 px-8 pb-10 pt-6">
      <p className="mb-6 text-center font-poppins text-[15px] font-[500] text-c1-A">
        “ This is an super space for your customers qoute. Don’t worry it works
        smooth as pie. You will get all what you need by writiing a text here “
      </p>
      <span className=" font-poppins text-[12px] font-[600] text-c1-C">
        Name and Surname
      </span>
      <div className=" absolute -bottom-6 z-50 h-12 w-12 rounded-full bg-c1-F"></div>
    </div>
  );
};

export default Customer_say_box;
