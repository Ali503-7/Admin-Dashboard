import { MdContentPaste, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Invoice = () => {
  const [invoice, setInvoice] = useState(false);

  return (
    <div className="cursor-pointer">
      <div onClick={() => setInvoice(prev => !prev)} className="NavLink !gap-3 flex flex-row justify-between">
        <div className="flex flex-row items-center gap-3">
          <MdContentPaste />
          Invoice
        </div>
        <MdOutlineKeyboardArrowRight className={
            invoice
              ? "rotate-90 transition-transform"
              : "rotate-0 transition-transform"
          } />
      </div>
      <ul className={`overflow-hidden transition-height ${invoice ? "h-[160px]" : "h-[0px]"}`}>
        <li>
          <NavLink className="NavLink">
            <div className="circle"></div>
            List
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink">
            <div className="circle"></div>
            Preview
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink">
            <div className="circle"></div>
            Edit
          </NavLink>
          <NavLink className="NavLink">
            <div className="circle"></div>
            Add
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Invoice