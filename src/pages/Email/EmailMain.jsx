import { useOutletContext } from "react-router-dom";
import Emails from "../../components/Email/Emails";
import EmailSearch from "../../components/Email/EmailSearch";
import { useState } from "react";


{/* here will create the body of the email shearch and filter */}
const EmailMain = () => {
  const [fillteredData] = useOutletContext();
  const [searchFillter, setSearchFillter] = useState([])
  const [typing , setTyping] = useState(0)

  return (
    <div className="relative w-full">
      {/* divider */}
      <div className="absolute w-px h-full bg-Light-Other-Divider dark:bg-Dark-Other-Divider"></div>

      <div>
        {/* Search Bar */}

        <EmailSearch
          searchFillter={searchFillter}
          setSearchFillter={setSearchFillter}
          fillteredData={fillteredData}
          setTyping={setTyping}
          typing={typing}
        />

        {/* Emails */}

        <Emails searchFillter={searchFillter} typing={typing} />
      </div>
    </div>
  );
}

export default EmailMain