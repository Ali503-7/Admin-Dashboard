import React, { useState, useEffect } from "react";
import {AiOutlineSearch} from 'react-icons/ai'

const EmailSearch = ({fillteredData, setFillterd }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Perform the search whenever the searchInput or data changes
    const lookFor = searchInput.toLowerCase();

    // If there is no search input, display all the data
    if (!lookFor) {
      setFillterd(fillteredData);
    } else {
      // Filter the data based on the search input (case-insensitive)
      const filteredMails = fillteredData.filter((email) => {
        const emailName = email.name.toLowerCase();
        return emailName.includes(lookFor);
      });

      setFillterd(filteredMails);
    }
  }, [searchInput, fillteredData]);

  return (
    <div className="w-full py-4 px-5 flex flex-row items-center gap-3 text-Light-Text-Disabled dark:text-Dark-Text-Primary border-b-[1px] dark:border-b-Dark-Other-Divider border-b-Light-Other-Divider">
      <AiOutlineSearch />
      <input
        type="search"
        placeholder="Search mail"
        className="w-full text-Light-Text-Primary dark:text-Dark-Text-Primary bg-transparent outline-none placeholder-Light-Text-Disabled dark:placeholder-Dark-Text-Primary Body1"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default EmailSearch;
