import { useLocation, useOutletContext } from "react-router-dom";
import Emails from "../../components/Email/Emails";
import EmailSearch from "../../components/Email/EmailSearch";
import { useState } from "react";


{/* here will create the body of the email search and filter */}
const EmailList = () => {
  const [filteredData] = useOutletContext();
  const [searchFilter, setSearchFilter] = useState([])
  const [typing, setTyping] = useState(0)

  return (
    <div className="relative w-full">
        {/* Search Bar */}

        <EmailSearch
          setSearchFilter={setSearchFilter}
          filteredData={filteredData}
          setTyping={setTyping}
        />

        {/* Emails */}

        <Emails filteredData={searchFilter} typing={typing} />

    </div>
  );
}

export default EmailList