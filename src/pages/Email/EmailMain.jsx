import { useOutletContext } from "react-router-dom";
import Emails from "../../components/Email/Emails";
import EmailSearch from "../../components/Email/EmailSearch";


{/* here will create the body of the email shearch and filter */}
const EmailMain = () => {
  const [fillteredData, setFillterd] = useOutletContext();

  return (
    <div className="relative w-full">
      {/* divider */}
      <div className="absolute w-px h-full bg-Light-Other-Divider dark:bg-Dark-Other-Divider"></div>

      <div>
        {/* Search Bar */}

        <EmailSearch fillteredData={fillteredData} setFillterd={setFillterd} />

        {/* Emails */}

        <Emails />
      </div>
    </div>
  );
}

export default EmailMain