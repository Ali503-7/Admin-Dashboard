import Emails from "../../components/Email/Emails";
import EmailSearch from "../../components/Email/EmailSearch";


{/* here will create the body of the email shearch and filter */}
const EmailMain = () => {
    

  return (
    <div className="relative w-full">
      {/* divider */}
      <div className="absolute w-px h-full bg-Light-Other-Divider dark:bg-Dark-Other-Divider"></div>

      <div>
        {/* Search Bar */}

        <EmailSearch  />

        {/* Emails */}

        <Emails  />
      </div>
    </div>
  );
}

export default EmailMain