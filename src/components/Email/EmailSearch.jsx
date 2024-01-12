import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import emailAsideMenu from "../../atoms/headerAtoms/email-aside-atom";

const EmailSearch = ({ setSearchFilter, filteredData, setTyping }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const handleSearch = (value) => {
    setSearchInput(value);
  };

  useEffect(() => {
    if (searchInput == "") {
      setTyping(0);
      setSearchFilter(filteredData);
      return;
    }
    setTyping((prev) => (prev += 1));
    setSearchFilter(
      filteredData.filter((massages) => {
        return massages.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    );
  }, [searchInput]);

  useEffect(() => {
    setSearchInput("");
  }, [typeFilter]);

  return (
    <div className="w-full py-4 h-[10%] px-5 sticky top-0 flex flex-row items-center gap-3 text-Light-Text-Disabled dark:text-Dark-Text-Primary border-b-[1px] dark:border-b-Dark-Other-Divider border-b-Light-Other-Divider ">
      <FiMenu className="xl:hidden cursor-pointer" onClick={() => emailAsideMenu.toggle()} />
      <AiOutlineSearch />
      <input
        type="search"
        placeholder="Search mail"
        className="w-full text-Light-Text-Primary dark:text-Dark-Text-Primary bg-transparent outline-none placeholder-Light-Text-Disabled dark:placeholder-Dark-Text-Primary Body1"
        value={searchInput}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default EmailSearch;
